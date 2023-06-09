import axios from "axios";
import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';

const SinglePage = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`/https://star-spark-pasta.glitch.me/api/products${params._id}`)
            .then((response) => {
                setProduct(response.data);
                console.log(response.data);
            });
    }, [params._id])

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={()=>{navigate(-1)}}>Back</button>
            <div className="flex">
                <img src={product.image} alt="image" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">₹ {product.price}</div>
                    <button className="bg-yellow-500 py-1
                    px-8 rounded-full font-bold mt-4
                    ">Add to cart</button>
                </div>
            </div>
        </div>
    )
};

export default SinglePage;
