
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
    const [user, setUser] = useState([])

    async function get() {
        let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}vendor/users`, {}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        setUser(resp.data.Response)
    }

    useEffect(() => {
        get()
    }, [])

    return {
        user,
        get
    }
}

export default useFetch