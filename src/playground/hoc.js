// Higher Order Component (HOC) = renders another component, allows reuse of code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';



const Info = (props) => (
    <div>
       <h1>Info</h1>
       <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    // The returned object is the higher order component
    return (props) => (
        <div>
            {props.isAdmin && <p> `This is private info. Please don't share!` </p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    // The returned object is the higher order component
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p> `Please log in.`</p>)}          
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin = {false} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {false} info="These are the details"/>, document.getElementById('app'));