// const article=document.querySelector('article');
// console.log(article);

// const name1=document.querySelector('.amaresh')
// const ul=document.querySelector('#username')

// name1.addEventListener('submit', e=>{
//     e.preventDefault();
//     console.log(name1.username.value);
// })

const username='abc'
const pattern=/[a-z]{4,}/
let result=pattern.test(username)
if(result){
    console.log("pass");

}else{
    console.log('failed');
}
