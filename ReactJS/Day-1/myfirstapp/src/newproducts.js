import { useEffect,useState } from "react";
import axios from "axios";
import "./products.css";
import ProductCard from "./productcard";
function NewProducts(){
    const [data,setData]=useState([]);
    const [count,setCount]=useState(0);
    const api="https://fakestoreapi.com/products";
    // useEffect(()=>{
    //     getProductList()
    // },[]);
    // Single time calling API if given empty square brackets
    useEffect(()=>{
        getProductList()
    },[count]);
    // [count] means the function call gets executed based on the count value
    const getProductList=()=>{
        axios.get(api).then((response)=>{
            // console.log(response.data);
            setData(response.data);
        });
    };
    return(
        <div>
            <h1>List of the Products</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        // <ProductCard res={ele} />
                        // <ProductCard image={ele.image} title={ele.title} price={ele.price} category={ele.category} />
                        <ProductCard {...ele} />
                    );
                })
            };
            </div>
        </div>
    );
};
export default NewProducts;