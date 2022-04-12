let count = 0;

const counter = document.querySelector('h1');

const newButton = document.querySelectorAll('.btn');

//  use .forEach() withquerySelectorALl 

newButton.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        
        if(btn.classList.contains('decrese'))
        {
            if (count == 0)
            {
            counter.textContent = count
        }
        else
        {
            count-=1;
            counter.textContent = count
            }        
        }

        if(btn.classList.contains('increase'))
        {
            count+=1;
            counter.textContent = count
        }
        
        if(btn.classList.contains('reset'))
        {
            count=0;
            counter.textContent = count;
        }


    })
})