

// Общие переменные
const bodyPage = document.querySelector('body')


// Фиксированая шапка
const headerPage = document.querySelector('#header')

headerFixed()
window.onscroll = headerFixed
function headerFixed() {
    let countScroll = window.scrollY
    let headerHeight = headerPage.offsetHeight

    if(countScroll > 0) {
        if(!headerPage.classList.contains('fixed')) { 
            headerPage.classList.add('fixed')
            bodyPage.style.paddingTop = headerHeight + 'px'
        }

    } else {
        headerPage.classList.remove('fixed')
        bodyPage.style.paddingTop = null
    }
}
(function() {
    const accordeons = document.querySelectorAll('[data-accordeon]');

    for (let accordeon of accordeons) {

        function accordeonShow(item) {
            let control = item.querySelector('.faq__control')
            let content = item.querySelector('.faq__content')

            item.classList.add('open')
            control.setAttribute('aria-expanded', 'true')
            content.setAttribute('aria-hidden', 'false')
            content.style.maxHeight = content.scrollHeight + 'px';
        }

        function accordeonHide(item) {
            let control = item.querySelector('.faq__control')
            let content = item.querySelector('.faq__content')

            item.classList.remove('open')
            control.setAttribute('aria-expanded', 'false')
            content.setAttribute('aria-hidden', 'true')
            content.style.maxHeight = null;
        }

        accordeon.querySelector('.faq__control').onclick = function() {

            if(accordeon.classList.contains('open')) {
                accordeonHide(accordeon)
            } 
            else {
                accordeons.forEach(function(item) {
                    accordeonHide(item)
                }) 
                accordeonShow(accordeon)
            }
        }
    }
})()
const burgerBtn = document.querySelector('#burger-btn')
const headerMenu = document.querySelector('#header-menu')



bodyPage.onresize = function() {
    if(window.innerWidth < 993) {
        burgerBtn.setAttribute('aria-expanded', 'false')
        headerMenu.setAttribute('aria-hidden', 'true')
    } else {
        burgerBtn.removeAttribute('aria-expanded')
        headerMenu.removeAttribute('aria-hidden')
    }
}


burgerBtn.onclick = function() {
    if(headerMenu.classList.contains('open')) {
        menuHide()
    }
    else {
        menuShow()
    }
}

function menuShow() {
    headerMenu.classList.add('open')
    burgerBtn.setAttribute('aria-expanded', 'true')
    headerMenu.setAttribute('aria-hidden', 'false')
}

function menuHide() {
    headerMenu.classList.remove('open')
    burgerBtn.setAttribute('aria-expanded', 'false')
    headerMenu.setAttribute('aria-hidden', 'true')
}