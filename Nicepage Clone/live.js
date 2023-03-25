const input = document.querySelector('.input')
const text = document.querySelector('.text')
const add = document.querySelector('.add')
// const task = document.querySelector('.task')
// const note = document.querySelector('.note')
const parentlist = document.querySelector('.list')
const box = document.querySelector('.box');

add.addEventListener('click', card)

function card() {
    if (input.value == '' && text.value == '') {
        console.log('none');
    }
    else {
        if (parentlist.childElementCount == 0) {
            const boxes = document.createElement('div')
            boxes.classList.add('box');
            parentlist.appendChild(boxes);

            const remove = document.createElement('div');
            remove.classList.add('x');
            boxes.appendChild(remove);
            remove.innerHTML = 'X';

            remove.addEventListener('click', trash);

            function trash(e) {
                if (e.target.innerHTML == 'X') {
                    console.log(e.target.parentElement)
                    let fire = e.target.parentElement;
                    fire.remove();
                }
            }

            const task = document.createElement('h2');
            boxes.appendChild(task);
            task.innerHTML = input.value;

            const note = document.createElement('p');
            boxes.appendChild(note);
            note.innerHTML = text.value;

            input.value = '';
            text.value = '';
        }
        else {
            const boxes = document.createElement('div')
            boxes.classList.add('box');
            parentlist.insertBefore(boxes, parentlist.children[0])

            const remove = document.createElement('div');
            remove.classList.add('x');
            boxes.appendChild(remove);
            remove.innerHTML = 'X';

            remove.addEventListener('click', trash);

            
            function trash(e) {
                if (e.target.innerHTML == 'X') {
                    console.log(e.target.parentElement)
                    let fire = e.target.parentElement;
                    fire.remove();
                }
            }

            const task = document.createElement('h2');
            boxes.appendChild(task);
            task.innerHTML = input.value;

            const note = document.createElement('p');
            boxes.appendChild(note);
            note.innerHTML = text.value;

            input.value = '';
            text.value = '';

        }
    }
}
