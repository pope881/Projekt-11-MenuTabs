const menuSections = document.querySelectorAll('.menu-section')
const menuTabs = document.querySelectorAll('.menu-tab')

const showInfo = id => {
    menuSections.forEach(section => section.style.display = 'none')
    document.getElementById(id).style.display = 'block'

    menuTabs.forEach(tab => tab.classList.remove('menu-tab-active'))
    document.querySelector(`[data-id="${id}"]`).classList.add('menu-tab-active')

}
