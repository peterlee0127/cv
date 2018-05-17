// request Request 

(function(callback) {
    'use strict';

    const httpTransport = require('https');
    const responseEncoding = 'utf8';
    const httpOptions = {
        hostname: 'api.github.com',
        port: '443',
        path: '/users/peterlee0127/repos?sort=updated',
        method: 'GET',
        headers: {"Accept":"application/vnd.github.machine-man-preview+json","Cookie":"logged_in=no"}
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;
 
    // Paw Store Cookies option is not supported

    const request = httpTransport.request(httpOptions, (res) => {
        let responseBufs = [];
        let responseStr = '';
        
        res.on('data', (chunk) => {
            if (Buffer.isBuffer(chunk)) {
                responseBufs.push(chunk);
            }
            else {
                responseStr = responseStr + chunk;            
            }
        }).on('end', () => {
            responseStr = responseBufs.length > 0 ? 
                Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;
            
            callback(null, res.statusCode, res.headers, responseStr);
        });
        
    })
    .setTimeout(0)
    .on('error', (error) => {
        callback(error);
    });
    request.write("")
    request.end();
    

})((error, statusCode, headers, body) => {
    //console.log('ERROR:', error); 
    //console.log('STATUS:', statusCode);
    //console.log('HEADERS:', JSON.stringify(headers));
    //console.log('BODY:', body);
    let data = JSON.parse(body);
    data = data.sort(function(a,b){ return b.stargazers_count-a.stargazers_count});
//    data = data.slice(0,5);
    data.forEach(item=> {
        console.log(item);
    });
    const fs = require('fs');
    const projects = JSON.parse(fs.readFileSync('./_data/project.json','utf8'));
    projects.forEach(project => {
        data.forEach(rep=> {
            if(project.github) {
                if(project.github==rep.svn_url){
                    console.log(rep);
                }
            }
        });
    });

    //data = JSON.stringify(data,null);
    //fs.writeFileSync("./_data/github.json",data,'utf8');
});

