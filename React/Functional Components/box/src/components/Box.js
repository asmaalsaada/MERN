import React , {useState} from 'react';
import styles from './Box.module.css';


const Box = (props) => {
    const {submitHandler, changeHandler, sangJa} = props;
    return (
        <div>
                <form onSubmit = {submitHandler} className = "">
                <div className="form-group">
                    <label htmlFor="boxColor">Color </label>    
                    <input className="form-control" type="text" name="boxColor" id="" onChange= {changeHandler} value = {sangJa.boxColor}/>
                </div>
                <span> . </span>
                <button type="submit" className=""> Add</button>
            </form>
        </div>

    );
};
export default Box;



