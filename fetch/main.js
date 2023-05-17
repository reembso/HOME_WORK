const list = document.querySelector(`ul`)
//GET - polucjhaty
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(todos =>{
        todos.forEach(todo => {
            const li = document.createElement(`li`)
            li.innerHTML = `<li>${todo.body}</li>`
            list.append(li)
        });
      })
    //   .catch(error =>{
    //     console.log(error);
    //   })

    ///POST - create
      fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method:`POST`,
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify({body:`i just wanna be baby`})
      })
      .then(response => response.json())
      .then(todo => console.log(todo))
      .catch(error => console.log(`Error`,error))