const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users').then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });


// Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });


// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2').then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});