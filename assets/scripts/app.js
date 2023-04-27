// Общие переменные
const bodyPage = document.querySelector('body')
const headerPage = document.querySelector('#header')

// Фиксированая шапка
headerFixed();
window.onscroll = headerFixed;
function headerFixed() {
    let countScroll = window.scrollY;
    let headerHeight = headerPage.offsetHeight;

    if(countScroll > 0) {
        if(!headerPage.classList.contains('fixed')) { 
            headerPage.classList.add('fixed');
            bodyPage.style.paddingTop = headerHeight + 'px';
            console.log('work');
        }

    } else {
        headerPage.classList.remove('fixed');
        bodyPage.style.paddingTop = null;
    }
}
/*
В аргумент передается весь блок с аккордеоном. По умолчанию '[data-accordeon]'
Можно использовать любой селектор CSS
Если аккордеон с таким селектором не один, будут работать все.
*/

function accordeon(data = '[data-accordeon]') {

    const accordeonAll = document.querySelectorAll(data)

    accordeonAll.forEach(el => {
        const itemAll = el.querySelectorAll('.faq__item')

        itemAll.forEach(item => {

            item.querySelector('.faq__control').addEventListener('click', event => {

                if(item.classList.contains('open')) {
                    accordeonHide(item)
                } else {
                    itemAll.forEach(itemj => {
                        accordeonHide(itemj)
                    })
                    accordeonShow(item)
                }
            })
        })
    });

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
}


accordeon()