import axios from 'axios';


/**
 * This is an Axios Wrapper to the unsplash site
 */
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID ybrUeJ4k_nvEHqV0LUGWXGqEhfd1ingJcUb7uDgPI2g'
    }

});