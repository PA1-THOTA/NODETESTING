const get=document.getElementById('get')
const post=document.getElementById('post')
const title=document.getElementById('title')
const content=document.getElementById('content')
const idbtn=document.getElementById('idbtn')
const byid=document.getElementById('byid')
const ct=document.getElementById('ct')
const cc=document.getElementById('cc')
const cctb=document.getElementById('cctb')
const idtodel=document.getElementById('idtodel')
const idtodelbtn=document.getElementById('idtodelbtn')

const url='http://localhost:8080'

get.addEventListener('click',()=>{
    fetch(url+'/feed/posts')
    .then(res=>res.json())
    .then(resdata=>console.log(resdata))
    .catch(err=>console.log(err))
})


post.addEventListener('click',()=>{
    fetch(url+'/feed/post',{
        method:'POST',
        body:JSON.stringify({
            title:title.value,
            content:content.value
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(resdata=>console.log(resdata))
    .catch(err=>console.log(err))
})

idbtn.addEventListener('click',()=>{
    fetch(url+'/feed/editpostById',{
        method:"POST",
        body:JSON.stringify({
            _id:byid.value
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(resdata=>console.log(resdata))
    .catch(err=>console.log(err))

})

cctb.addEventListener('click',()=>{
    fetch(url+'/feed/editpostById',{
        method:"POST",
        body:JSON.stringify({
            _id:byid.value,
            title:ct.value,
            content:cc.value
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(resdata=>console.log(resdata))
    .catch(err=>console.log(err))

})
idtodelbtn.addEventListener('click',()=>{
    fetch(url+'/feed/deletepostById',{
        method:"POST",
        body:JSON.stringify({
            _id:byid.value,
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(resdata=>console.log(resdata))
    .catch(err=>console.log(err))

})