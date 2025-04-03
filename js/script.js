const create = document.getElementById('create_button');
const join = document.getElementById('join_button');
const modal_create = document.getElementById('modal_create');
const modal_join = document.getElementById('modal_join');
const close = document.getElementById('close');


create.addEventListener('click', () => {
    modal_create.classList.add('show');
})

join.addEventListener('click', () => {
    modal_join.classList.add('show');
})

close.addEventListener('click', () => {
    modal_create.classList.remove('show');
})

close.addEventListener('click', () => {
    modal_join.classList.remove('show');
})