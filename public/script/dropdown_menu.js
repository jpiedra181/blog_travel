const destBtn = document.getElementById('destBtn')
const dropdown = document.getElementById('dropdown')

if(dropdown.classList.contains('isActive')) {

}

destBtn.addEventListener('click', () => {
    if(dropdown.classList.contains('isActive')) {
        dropdown.style.display = 'none'
        dropdown.classList.remove('isActive')
    } else {
        dropdown.style.display = 'block'
        dropdown.classList.add('isActive')
    }
});