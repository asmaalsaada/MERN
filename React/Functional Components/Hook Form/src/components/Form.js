import React from 'react';


const Form = props =>{
    const {something,setSomething} = props;
    //received from app.js
    const onChange =(e) =>{ 
        //catches the change on the event 
        setSomething({
            ...something,
            [e.target.name]:e.target.value,
        })

    }
    return(
        <form > 
            <label htmlFor="firstName">First Name:</label>
            <div>
                <input type="text" onChange={onChange} name="firstName" />
            
            </div>
            <div>
                <label htmlFor="lastName" >Last Name: </label> 
                <input type="text" onChange={ onChange } name="lastName"/>
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="email" onChange={onChange} name="email"/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={onChange } name="password"/>
            </div>
            <div>
                <label htmlFor="confirmPasswd">Confirm Password: </label>
                <input type="password" onChange={onChange} name="confirmPasswd"/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
export default Form;