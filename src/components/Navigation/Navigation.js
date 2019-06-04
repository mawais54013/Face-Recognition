import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('signout')} className='b f3 link dim white underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('signin')} className='b f3 link dim white underline pa3 pointer'>Sign In</p>
                <p onClick = {() => onRouteChange('register')} className='b f3 link dim white underline pa3 pointer'>Register</p>
            </nav>
            <h1>Welcome To Face-Recognition</h1>
            </div>
        );
    }
}

export default Navigation;