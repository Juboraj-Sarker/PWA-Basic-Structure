const ul = document.getElementById('authors');
// var url = 'https://randomuser.me/api/?results=10'
var url = 'http://192.168.99.136/testApp/api/GetSalesParty'
var ip;
var request = new Request('http://192.168.99.136/testApp/api/GetSalesParty');


// fetch(url)
//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function(data) {
//         // Create and append the li's to the ul


//         let authors = data.results; // Get the results
//         return authors.map(function(author) { // Map through the results and for each run the code below
//             var  li = createNode('li'), //  Create the elements we need
//                 img = createNode('img'),
//                 span = createNode('span');


//             img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
//             span.innerHTML = `${author.name.title} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author

//             append(ul, li);
//             append(li, img); // Append all our elements
//             append(li, span);


//     })
// })











// fetch(request, {mode: 'no-cors'})
// .then(function(response) {
  
//     response.json().then(function(data){

//         console.log('FETCH', data);
//     });

// }).catch(function(error) {  
//   console.log('Request failed', error)  
// });

// fetch('http://192.168.99.136/testApp/api/GetSalesParty')
// .then(function(response){

//     console.log(response.json());
// })



fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        // Create and append the li's to the ul


        let authors = data; // Get the results
        return authors.map(function(author) { // Map through the results and for each run the code below
            var  li = createNode('li'), //  Create the elements we need
                span = createNode('span');
            span.innerHTML = `${author.CUST} ${author.DISNOR}`; // Make the HTML of our span to be the first and last name of our author

            append(ul, li);
            append(li, span);


    })
})




function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}



