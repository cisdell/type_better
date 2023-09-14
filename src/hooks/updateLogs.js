
import axios from 'axios';
const localhost = 'http://127.0.0.1:5000';
const aws =  'http://ec2-54-88-203-55.compute-1.amazonaws.com:5000'

const instance = axios.create({
  baseURL: aws, // Your backend API URL
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
