const inputBlur = document.getElementById('blur')
const inputSpacing = document.getElementById('spacing')
const inputColor = document.getElementById('base')
const image = document.querySelector('.img')

inputBlur.addEventListener('input', ()=> {
    const blur = inputBlur.value
    image.style.filter = 'blur('+blur+'px)'
})

inputSpacing.addEventListener('input', ()=>{
    const spacing = inputSpacing.value
    image.style.borderWidth = spacing+'px'
})

inputColor.addEventListener('input', ()=>{
    const color = inputColor.value
    image.style.borderColor = color
})