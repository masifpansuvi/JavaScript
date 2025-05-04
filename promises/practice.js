// const promiseOne = new Promise((resolve,reject)=>{
//     let num = Math.random();
//     if(num > 0.5){
//         resolve(`${num} is greater then 0.5`)
//     }
//     else{
        
//         reject()
//     }
// })
// promiseOne.then((message)=>{
//     console.log(`done: ${message}`)
// }).catch((error)=>{
//     console.log(` error: ${error}`);
    
// })

// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Function to fetch data from the API
function fetchData(url) {
  // The fetch function returns a Promise
  return fetch(url)
    .then(response => {
      // Check if the response status is OK (200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      // Parse the JSON from the response
      return response.json();
    });
}

// Call the fetchData function and handle the Promise
fetchData(url)
  .then(data => {
    // Handle the data received from the API
    console.log('Data received:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });