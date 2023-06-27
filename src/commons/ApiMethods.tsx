import axios from 'axios';
import { useEffect, useState } from 'react';

function ApiMethods(url: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        setLoading(true);
        axios.get(url, config)
            .then((response) => { setData(response.data) })
            .catch((error) => { setError(error) })
            .finally(() => { setLoading(false)})
    }, [url])

    const createMethod = (product_name: any, price_product: any) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        setLoading(true);
        axios.post(url, { product_name: product_name, price: price_product }, config)
            .then((response) => { setData(response.data) })
            .catch((error) => { setError(error) })
            .finally(() => { setLoading(false) })
    }

    const putMethod = (id: any, product_name: any, price_product: any) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        setLoading(true);
        axios.put(`${url}/${id}`, { product_name: product_name, price: price_product }, config)
            .then((response) => { setData(response.data) })
            .catch((error) => { setError(error) })
            .finally(() => { setLoading(false) })
    }

    const deleteMethod = (id: any) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        setLoading(true);
        axios.delete(`${url}/${id}`, config)
            .then((response) => { setData(response.data) })
            .catch((error) => { setError(error) })
            .finally(() => { setLoading(false) })
    }

    return { data, loading , error , createMethod , putMethod, deleteMethod }; 
}

export default ApiMethods; 