fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))