import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const {onSubmitPr,initialTitle,initialPrice,initialDescription} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice); 
    const [description, setDescription] = useState(initialDescription);
    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmitPr({title,price,description});
        setTitle("");
        setPrice("");
        setDescription(""); 
    }
    return (
        
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title : </label><br/>
                <input 
                type="text"
                name="title" 
                onChange={(e)=>{setTitle(e.target.value)}} 
                value={title}/>
            </p>
            <p>
                <label>Price :</label><br/>
                <input 
                type="text" 
                name="price"
                onChange={(e)=>{setPrice(e.target.value)}} 
                value={price}/>
            </p>
            <p>
                <label>Description :</label><br/>
                <input 
                type="text" 
                name="description"
                onChange={(e)=>{setDescription(e.target.value)}} 
                value={description}/>
            </p>
            <input type="submit" />
        </form>
    )
}

