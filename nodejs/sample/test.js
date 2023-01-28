import jwt from "jsonwebtoken"
import fetch from "node-fetch"

// send request to /, return token
const token = await fetch("http://localhost:8080/hello-jwt").then(res => res.text());

const decoded = jwt.verify(token, Buffer.from('hello', 'base64'), {algorithms: ["HS512"]});

console.log(decoded);
