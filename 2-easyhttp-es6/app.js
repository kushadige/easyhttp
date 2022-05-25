const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});

// Create Data, Create Post
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});