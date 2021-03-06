'use strict'

const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer(function (request, response){
    const urll = url.parse(request.url).pathname;
    if (urll === '/'){
        const text = fs.readFileSync('index.html', 'utf-8')
        response.end(text)
    }
    const normurl = '.' + urll;
    console.log(normurl);
    console.log(normurl[normurl.length-1]);
    if(normurl[normurl.length-1] === 's'){
        const css = fs.readFileSync(normurl, 'utf-8')
        response.end(css)
    }
    if(normurl[normurl.length-1] === 'g' && normurl[normurl.length-2] === 'v'){
        const svg = fs.readFileSync(normurl, )
        response.writeHead(200, {"content-type" : "image/svg+xml"})
        response.end(svg)
    }
    if(normurl[normurl.length-1] === 'g' && normurl[normurl.length-2] === 'n'){
        const svg = fs.readFileSync(normurl, )
        response.writeHead(200, {"content-type" : "image/png"})
        response.end(svg)
    }
    if(normurl[normurl.length-1] === 'g' && normurl[normurl.length-2] === 'e'){
        const svg = fs.readFileSync(normurl, )
        response.writeHead(200, {"content-type" : "image/jpeg"})
        response.end(svg)
    }
    if(normurl[normurl.length-1] === 'f'){
        const svg = fs.readFileSync(normurl)
        response.writeHead(200, {"content-type" : "image/gif"})
        response.end(svg)
    }



    // if(normurl[normurl.length-1] === 's'){
    //         console.log(normurl);
    //         const text = fs.readFileSync(normurl, 'utf-8')
    //         response.end(text)
    //     }
    // if(normurl === './'){
    //     const text = fs.readFileSync('index.html', 'utf-8')
    //     response.end(text)
    // }
    // if(normurl[normurl.length-1] === 's'){
    //     console.log(normurl);
    //     // const text = fs.readFileSync(normurl, 'utf-8')
    //     // response.end(text)
    // }
    response.end()
})

server.listen(process.env.PORT || 3000);
console.log('server started!')
