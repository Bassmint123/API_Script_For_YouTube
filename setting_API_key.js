// POST /yourdomain/learn-http HTTP/1.1
// Host: www.mywebsite.com
// Content-Type: text/html; charset=UTF-8

// Name=Eric&Age=26

var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.mywebsite.com/doesnt_exist", false);
xhr.send();
// Add your code below!
console.log(xhr.status);

// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8

// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.mywebsite.com/">Accepted</string>

<pet>
  <name>Jeffrey</name>
  <species>Giraffe</species>
</pet>

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.mywebsite.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);

JSON
{
  "pets": {
    "name": "Jeffrey",
    "species": "Giraffe"
  }
}

JSON DEMO
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);