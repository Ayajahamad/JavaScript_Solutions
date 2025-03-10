// fetch()
/*
Syntax :-

fetch(url, options)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => console.log(data))    // Use the data
  .catch(error => console.error('Error:', error)); // Handle errors

url: The URL to send the request to.
options: Optional parameters that define the request method (e.g., GET, POST), headers, body, etc.
*/

// fetch('https://dummyjson.com/users')
//     .then((data) => {
//     return data.json()
//     }).then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//     console.log(err);
//     })

// with async/await
async function dataFetch(params) {
    try {
        let users = await fetch('https://dummyjson.com/user')
        let data = await users.json()
        // console.log(data);

        let ul = document.getElementById('ul')
       

        data.users.map((user) => {
            let li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = `<strong>Name :</strong> : ${user.firstName}`

            let ul1 = document.createElement('ul')
            ul.appendChild(ul1)

            let li1 = document.createElement('li')
            ul1.appendChild(li1)
            li1.innerHTML = `<strong>ID :</strong> : ${user.id}`
            
            let li2 = document.createElement('li')
            ul1.appendChild(li2)
            li2.innerHTML = `<strong>Email :</strong>  ${user.email}`
        })

    } catch (err) {
        console.log(err);
    }
    
}
dataFetch()


