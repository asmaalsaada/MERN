import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteBtn from '../components/DeleteBtn';
export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded , setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(console.log("product is fetched"))
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log("product wasn't fetched"))
    }, [])
    const updateProduct = product => {
        // event.preventDefault();        
        axios.put('http://localhost:8000/api/products/' + id,product)
            .then(res => console.log(res))
            .then(res => navigate(`/products/${id}`))
            
    }
    return (
        <div>
            <h1>Update a Product</h1>
        {loaded && 
            <>
            <ProductForm
                onSubmitPr={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            <DeleteBtn productId={product._id} successCallback={()=>navigate("/")}/>
            
            </>
        }     
        </div>
        )
            }