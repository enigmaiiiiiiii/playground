
const httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = () => {
  console.log(httpRequest.responseText);
}

httpRequest.open('GET', 'http://localhost:3000/hello', true);
httpRequest.send();
