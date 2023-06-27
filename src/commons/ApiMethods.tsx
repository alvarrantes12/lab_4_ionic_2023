import axios from "axios";
import { useEffect, useState } from "react";

function ApiMethods(url: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect (() => {
        const config = {
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.get(url, config)
            .then((response) => {setData(response.data) })
            .catch((err) => {setError(err) })
            .finally(() => {setLoading(false) })

    }, [url])

    const refetch = () => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };
    };

    const putMethod = (id: any, name: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.put(`${url}/${id}`, { name: name }, config)
            .then((response) => { setData(response.data); })
            .catch((err) => { setError(err); })
            .finally(() => { setLoading(false); });
    }

    const postProduct = (name: string, price: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios.post(`${url}`, { name, price }, config)
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
        axios.delete(`${url}/${id}`,config)
            .then((response) => { setData(response.data); })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    };

    return { data, loading, error, refetch, putMethod,postProduct,deleteProduct}

}

export default ApiMethods;