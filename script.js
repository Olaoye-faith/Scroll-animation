const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

function checkboxes(){
    const triggerbuttom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top

        if (boxtop < triggerbuttom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}