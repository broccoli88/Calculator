// add number and operations to the screen
// when pressing = compute operation and display it in the 'sum' screen
// set up clear function to clear whole operation
// set del button to delete last sign
// prevent showing any non-numerical signs before numerical input
// ! PREVENT DISPLAYING SIGN AFTER SIGN
// * CHANGE ADDING NUMBER => WHEN ADDING SIGN NUMBER MOVES TO THE MIDDLE SCREEN WITH SIGN // THAT PREVENTS FROM ADDING MORE SIGNS THAN ONE // MAKE IT INSTANTLY SUMMING BY CONVERTING STRING WITH parseFloat.


const sum = document.querySelector('#sum');
const operation = document.querySelector('#operation');
const midddleScreen = document.querySelector(`#middle-screen`)
const numbers = document.querySelectorAll('.number');
const signs = document.querySelectorAll('.sign')

const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const plus = document.querySelector('#plus')
const equal = document.querySelector('#equal')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const dot = document.querySelector('#dot')



// ADDING INPUT TO OPERATION SCREEN

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        let value = e.target.textContent
        console.log(typeof e.target.textContent);
        operation.textContent += value
        
    })
})

// ? CHANGE ACCORDINGLY TO [GREEN] POINTERS

signs.forEach((sign) => {
   sign.addEventListener('click', (e) => {
       if (operation.textContent === "") return
       else {
           let value = e.target.textContent
           operation.textContent += value
       }   
   })
})

// CLEARING INPUT

clear.addEventListener('click', () => {
    operation.textContent = ""
    sum.textContent = ""
})

// DELETE LAST CHARACTER

del.addEventListener('click', () => {
 let newValue = operation.textContent.slice(0, -1)  
 operation.textContent = newValue
})

// COMPUTING

 equal.addEventListener('click', () => {

 })



