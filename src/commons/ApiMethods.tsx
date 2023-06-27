import axios from 'axios';
import { useEffect, useState } from 'react';


 function ApiMethods (url: any){
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect (() => {
	    const config = {
		    headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
		    }
	    }

	    setLoading(true);
	    axios.get(url, config)
		    .then((response) => { setData(response.data) })
		    .catch((err) => {setError(err) })
		    .finally(() => {setLoading(false) })

    }, [url])

    const refetch = () => {
        const config = {
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json"
            }
        }

        setLoading(true);
        axios.post(url, {name: "Ionic1", breed: "Tech1", pedigree:true, owner_id: 1}, config)
            .then((response) => {setData(response.data) })
            .catch((err) => {setError(err) })
            .finally(() => {setLoading(false) })
    }

    const putMethod = (id: any, name: any, price: any) => {
        const config = {
		    headers: {
			    "Accept": "application/json",
			    "Content-Type": "application/json"
		    }
        }

        setLoading(true);
        axios.put(`${url}/${id}`, {name: name, price: price}, config)
            .then((response) => { setData(response.data) })
            .catch((err) => { setError(err) })
            .finally (() => { setLoading (false) })
    }

    const postMethod = (name: any, price: any) => {
        const config = {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        };
      
        setLoading(true);
        axios.post(url, { name, price}, config)
          .then((response) => { setData(response.data) })
          .catch((err) => { setError(err) })
          .finally(() => { setLoading(false) });
    }

    const deleteMethod = (id: any) => {
        const config = {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        };
      
        setLoading(true);
        axios.delete(`${url}/${id}`, config)
          .then(() => { setLoading(false) })
          .catch((err) => { setError(err) });
    }
      
      

    return {data, loading, error, refetch, putMethod, postMethod, deleteMethod}
}

export default ApiMethods;