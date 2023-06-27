import axios from "axios";
import { useEffect, useState } from "react";



export default function ApiMethods(baseUrl: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refetch = () => {
        const config = {
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios
            .get(baseUrl, config)
            .then(response => setData(response.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    useEffect(refetch, []);

    const createProduct = (name: string, price: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios
            .post(baseUrl, { name, price }, config)
            .then((response) => { setData(response.data); })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    const updateProduct = (id: any, name: any, price: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios
            .put(`${baseUrl}/${id}`, { name, price }, config)
            .then((response) => { setData(response.data); })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    const deleteProduct = (id: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        return axios
            .delete(`${baseUrl}/${id}`, config)
            .then((response) => {
                if (response.status === 200 || response.status === 204) {
                    setData(response.data);
                    return { success: true };
                } else {
                    throw new Error('Delete operation was not successful');
                }
            })
            .catch(err => {
                setError(err);
                return { success: false, error: err };
            })
            .finally(() => setLoading(false));
    };


    return { data, loading, error, createProduct, updateProduct, deleteProduct, refetch };
}
