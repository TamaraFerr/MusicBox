const create = document.getElementById('create_button');
const join = document.getElementById('join_button');
const modal_create = document.getElementById('modal_create');
const modal_join = document.getElementById('modal_join');
const close_modal_create = document.getElementById('close_modal_create');
const close_modal_join = document.getElementById('close_modal_join');


create.addEventListener('click', () => {
    modal_create.classList.add('show');
})

join.addEventListener('click', () => {
    modal_join.classList.add('show');
})

close_modal_create.addEventListener('click', () => {
    modal_create.classList.remove('show');
})

close_modal_join.addEventListener('click', () => {
    modal_join.classList.remove('show');
})