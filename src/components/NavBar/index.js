import React from 'react';

const navBar = props => (
    <div style={{display:"flex",justifyContent:"flex-end"}}>
        {
        props.user?
        <>
            <span>{props.user.email}</span>
            <button onClick={props.signOut}>Sign Out</button>
        </>
        :
        <>
            <button onClick={props.googleSignIn}>Sign In With Google</button>
            <button onClick={props.facebookSignIn}>Sign In With Facebook</button>
            <input placeholder="email" type="email" name="email" onChange={props.inputChanged}/>
            <input placeholder="password" type="password" name="password"onChange={props.inputChanged}/>
            <button onClick={props.signIn}>Sign In</button>
        </>
        }

    </div>
);

export default navBar;