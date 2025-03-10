

let btn = document.getElementById('btn')
let us = []


btn.addEventListener('click', () => {
    let todo = document.getElementById('text').value
    let div = document.getElementById('list')

    us.push({'val':todo})
    console.log(us);
    
    let ul = document.createElement('ul')
    let li = document.createElement('li')

    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')

    btn1.innerText = 'delete'
    btn2.innerText = 'update'

    // btn1.setAttribute('id', 'dlt')
    // btn2.setAttribute('id','upd')
    
    ul.appendChild(li)

    div.appendChild(ul)

    li.textContent = todo
    li.appendChild(btn1)
    li.appendChild(btn2)


    btn1.addEventListener('click', (e) => {
        console.log(e.target);
        let pli = e.target.parentElement
        pli.remove()
    })
    
    btn2.addEventListener('click', (e) => {
        console.log(e.target);
        let pli = e.target.parentElement
        let itemText = pli.childNodes[0].textContent.trim();
        console.log(itemText);
        document.getElementById('text').value = itemText

})
})


