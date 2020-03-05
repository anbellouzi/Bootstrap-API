# Bootstrap HTML API

## Description

> An awesome project that stores all bootstrap html components such as navbar, footer, image carousel etc. Call the API to get the html code and bootstrap styles to use in your website. 

## Installation

To install this API, clone the repository, open terminal and run this command in that directory. 

``` bash
npm install 
```

then 

``` bash
npm start 
```

# How to Make Requests

## GET html starter code (doctype, navbar, footer)

Send a GET request to URL `localhost:3000/starter` to get navbar component 

Data will look like: 

```json
[
    {
        name: 'starter',
        html: '<!DOCTYPE html>
                <html>
                <head>
                <title>Page Title</title>
                </head>
                <body>
                    <nav> ... </nav>
                    // body
                    <footer> ... </footer>
                </body>
                </html>'
    }
]
```

## List of All Components

Send a GET request to URL `localhost:3000/components` to get a list of components

Data will look like: 

```json
[
    { name: 'starter' },
    { name: 'navbar' },
    { name: 'footer' },
    { name: 'carousel' },
]
```

## GET html component Ex. navbar

Send a GET request to URL `localhost:3000/navbar` to get navbar component 

Data will look like: 

```json
[
    {
        "name": "navbar",
        "html": " <nav class='navbar navbar-light bg-light'>
                <a class='navbar-brand' href='#'>Navbar</a>
                </nav>",
    }
]
```

## POST html component Ex. footer

Send a POST request to URL `localhost:3000/component/add` to save footer component to API 

``` py
### defining the api-endpoint  
API_ENDPOINT = "localhost:3000/component/add"
  
### your API key here 
API_KEY = "XXXXXXXXXXXXXXXXX"

# your source code here 
component =  {
    name: 'footer',
    html: '
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
        </footer>'
}
  
### data to be sent to api 
data = {'component':component,} 
  
# sending post request and saving response as response object 
r = requests.post(url = API_ENDPOINT, data = data) 
  
# extracting response text  
response = r.text 
print("Response:%s"%response) 


