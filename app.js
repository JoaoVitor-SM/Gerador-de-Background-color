const colors = ['green', 'red', 'pink', 'yellow', 'blue', 'purple'];

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')


btn.addEventListener('click', function(){
    
    const randomNumber = getRandomNumbers()
        // backgrond-color
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumbers() {
    return Math.floor( Math.random() * colors.length)
}