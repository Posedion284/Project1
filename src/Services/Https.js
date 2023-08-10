import axios from 'axios';
const url = process.env.REACT_APP_API_URL
const REACT_APP_API_URL = "http://192.168.1.85:4000/"

const Post = async (apiUrl, data, id = '') => {
    let headers = {
        "Content-Type": 'application/json',
    }
    // body: JSON.stringify(form)
    let APIURL;
    if (id) {
        APIURL = `${REACT_APP_API_URL}${apiUrl}${id}`;
    } else {
        APIURL = `${REACT_APP_API_URL}${apiUrl}`;
    }
    try {
        const res = await axios.post(APIURL, data, { headers });
        return res
    } catch (error) {
        if (error.response) {
            // Request made but the server responded with an error
            return error.response;
        } else if (error.request) {
            // Request made but no response is received from the server.
            return error.request;
        } else {
            // Error occured while setting up the request
            return error.message;
        }
    }
};

const Get = async (apiUrl, id = '') => {
    let headers = {
        "Content-type": "application/json",
    }

    let APIURL;

    if (id) {

        APIURL = `${REACT_APP_API_URL}${apiUrl}${id}`;

    } else {

        APIURL = `${REACT_APP_API_URL}${apiUrl}`;

    }

    try {

        const res = await axios.get(APIURL, { headers });

        return res;

    } catch (error) {

        if (error.response) {

            return error.response;

        } else if (error.request) {

            return error.request;

        } else {

            return error.message;

        }

    }

};




export default {
    Get,
    // Put,
    Post
}