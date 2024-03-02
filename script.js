// const colorTarget = document.querySelectorAll('.button');
// const body = document.querySelector('body');
// console.log('Hi')
// console.log(colorTarget)
// colorTarget.forEach(function (c) {
//     console.log(c);
//     c.addEventListener('click',(e)=>{
//         console.log(e.target);
//     })
// })

// console.log("hitesh")
// console.log(single);
let buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
// console.log(buttons) 
// console.log(body) 
buttons.forEach(function (button) {
//   console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      }
    
  });
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click',()=>{
    body.style.backgroundColor = 'white';
})

