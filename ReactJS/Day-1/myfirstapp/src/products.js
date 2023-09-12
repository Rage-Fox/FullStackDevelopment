import { useEffect,useState } from "react";
import axios from "axios";
// npm i axios
// axios is used to fetch the data from the server
import "./products.css";
// API Methods are: get, post, put, delete
// get=get all those information
// post=add any data that we get into the server
// put=updating data based on id into the server
// delete=remove the data from the server based on id
function Products(){
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
                        <div className="card">
                            <img src={ele.image} />
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                            <hr />
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};
export default Products;