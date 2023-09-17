import axios from "axios";
const localhost = "http://127.0.0.1:5000";
const aws = "http://ec2-18-218-129-28.us-east-2.compute.amazonaws.com:5000";

const instance = axios.create({
  baseURL: aws, // Your backend API URL
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
