import axios from "axios";

export const apiheader = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }

};


export const GetData = async (url, header) => {
    let { data } = await axios.get(url, header);
    return data;
}

export const PostData = async (url, body ,header) => {
    let  data  = await axios.post(url, body, header);
    return data;
}