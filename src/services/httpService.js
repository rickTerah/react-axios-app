import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = 
    error.response && 
    error.response.status >= 400 && 
    error.response.status < 500;
  
    if(!expectedError){
      toast.error('An unexpected error has occured');
    }
    return Promise.reject();
});

export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
}