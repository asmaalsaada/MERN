import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteBtn from './DeleteBtn';
export default props => {
    // const { removeFromDom } = props;
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter (product => product._id != productId)) 
    }
    return (

        <div>
            {props.products.map((product, idx)=>{
            return <div>
                        <Link to={`/products/${product._id}`} key={idx}>{product.title}</Link>
                        <DeleteBtn productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </div>
            })}
        </div>
        )}
                        

