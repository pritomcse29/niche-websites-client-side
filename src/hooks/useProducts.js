import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://protected-spire-55400.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;