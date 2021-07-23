import React from 'react'

const ShowMe= (props)=> {
    //passed through app.js
    const{view} =props;
return(
    <div>
        <h3>Your form's info</h3>
        <p>First Name {view.firstName}</p>
        <p>Last Name {view.lastName}</p>
        <p>Email {view.email}</p>
        <p>Password {view.password}</p>
        <p>Confrim Password {view.confirmPasswd}</p>
    </div>
);

};

export default ShowMe;