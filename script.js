// selecting all elements

const buttons = document.querySelectorAll('.button');
// console.log('buttons', buttons);

const bdy = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", function(e){
    //   console.log(e.target);
    //   console.log(e);

      if(e.target.id === 'gray'){
        bdy.style.backgroundColor = e.target.id;
       
      }
      if(e.target.id === 'blue'){
        bdy.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        bdy.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'red'){
        bdy.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'purple'){
        bdy.style.backgroundColor = e.target.id;
      }
      
    })
    
})
