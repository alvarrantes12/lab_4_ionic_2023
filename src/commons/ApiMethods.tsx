import axios from "axios";
import { useEffect, useState } from "react";

function ApiMethods(url:any){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(()=> {
        const config={
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        setLoading(true);
        axios.get(url,config)
            .then((response) => {setData(response.data)})
            .catch((err) => { setError(err) })
            .finally(() => {setLoading(false) })

    }, [url])

    const refetch = (product_name: any, product_price: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.post(`${url}`, {product_name: product_name, product_price: product_price}, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally(() => {setLoading(false) })
    }

    const putMethod = (id: any, product_name: any, product_price: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.put(`${url}/${id}`, {product_name: product_name, product_price: product_price}, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally(() => { setLoading(false) })
    }

    const deleteMethod = (id: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.delete(`${url}/${id}`, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally(() => { setLoading(false) })
    }
    
    return { data, loading, error, refetch, putMethod, deleteMethod }

}

export default ApiMethods;