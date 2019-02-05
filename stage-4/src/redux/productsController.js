import axios from 'axios';

const getAll = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}

export default getAll;