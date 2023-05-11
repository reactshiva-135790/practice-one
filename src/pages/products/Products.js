import Product from "./../../components/product/Product"
import axios from "axios";
import { useState, useEffect,useContext } from 'react';
import { CartContext } from "../../CartContext";


const baseURL = "https://star-spark-pasta.glitch.me/api/products";

const Products = () => {

   const {name} =useContext(CartContext);

const [products, setProducts] = useState([]);
useEffect(() => {
    axios.get(baseURL).then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
}, []);


    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products {name}</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                   products.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default Products;