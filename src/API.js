import axios from 'axios';

const API = {
    search: function() {
        return axios.get('https://randomuser.me/api/?inc=name,location,email,phone,picture&nat=us&results=42&seed=patioleprechaun');
    }
};

export default API;