class easyHTTP {
    // HTTP GET Request
    get(url, callback){
        this.xhr = new XMLHttpRequest();

        this.xhr.open('GET', url, true);

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText);
            } else {
                callback('Error: ' + this.xhr.status);
            }
        }

        this.xhr.send();
    }
    // HTTP POST Request
    post(url, data, callback){
        this.xhr = new XMLHttpRequest();

        this.xhr.open('POST', url, true);
        this.xhr.setRequestHeader('Content-type', 'application/json');

        this.xhr.onload = () => {
            callback(null, this.xhr.responseText);
        }

        this.xhr.send(JSON.stringify(data));
    }
    // HTTP PUT Request
    put(url, data, callback){
        this.xhr = new XMLHttpRequest();

        this.xhr.open('PUT', url, true);
        this.xhr.setRequestHeader('Content-type', 'application/json');

        this.xhr.onload = () => {
            callback(null, this.xhr.responseText);
        }

        this.xhr.send(JSON.stringify(data));
    }
    // HTTP DELETE Request
    delete(url, callback){
        this.xhr = new XMLHttpRequest();

        this.xhr.open('DELETE', url, true);

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null, 'Post Deleted');
            } else {
                callback('Error: ' + this.xhr.status);
            }
        }

        this.xhr.send();
    }
}