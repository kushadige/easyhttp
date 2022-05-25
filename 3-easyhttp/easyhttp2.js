/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author oguzhankuslar
 * @license MIT
 * 
 **/

class EasyHTTP {
    // HTTP GET Request
    get(url){
        return new Promise(function(resolve, reject){
            fetch(url).then(function(res){
                return res.json();
            }).then(function(data){
                return resolve(data);
            }).catch(function(err){
                return reject(err); 
            });
        });
    }

    // HTTP POST Request
    post(url, data){
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(function(res){
                return res.json();
            }).then(function(data){
                return resolve(data);
            }).catch(function(err){
                return reject(err);
            });
        });
    }

    // HTTP PUT Request
    put(url, data){
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(function(res){
                return res.json();
            }).then(function(data){
                return resolve(data);
            }).catch(function(err){
                return reject(err);
            });
        });
    }

    // HTTP DELETE Request
    delete(url){
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(function(res){
                return res.json();
            }).then(function(){
                return resolve('Resource Deleted...');
            }).catch(function(err){
                return reject(err);
            });
        });
    }
}