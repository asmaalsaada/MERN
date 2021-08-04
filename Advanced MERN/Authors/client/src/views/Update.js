import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import AuthrForm from '../components/AuthrForm'

export default function Update(props) {
    const {initialName,setCaption,id} = props;
    const [author, setAuthor] = useState({})
    const [loaded,setLoaded] = useState(false);
    // const [name, setName] = useState(author.name)   
    const [errors,setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(console.log("author is fetched"))
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log("author wasn't fetched"))
    }, [id])
    const updateAuthr = author => {
        axios.put('http://localhost:8000/api/edit/' + id,author
        )
            .then(res => console.log(res))
            // .then(res => navigate(`/home`))
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                console.log(errorArr);
                setErrors(errorArr);
            })
            
    }
    return (
        <div>
            <div>{props.setCaption}</div>
            <span> <Link to={`/home`}>Home</Link></span>

            {loaded && (
                <AuthrForm
                onSubmitProp={updateAuthr}
                initialName={author.name}
                errorsS={errors}
                /> 
                )}
                
        </div>
    )
}
