import checkNumInputs from "./checkNumInputs";

const dataFromCalc = (state) => {
    const formWindow = document.querySelectorAll('.balcon_icons_img');
    const widthWindow = document.querySelector('#width');
    const heightWindow = document.querySelector('#height');
    const typeWindow = document.querySelectorAll('#view_type');
    const checkboxWindow = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function form(window) {
        formWindow.forEach((item, i) => {
            item.addEventListener('click', () => {
                state[window] = i;
                console.log(state);

            });
        });
    }

    function size(w,h) {
        widthWindow.addEventListener('input', () => {
            state[w] = widthWindow.value;
            console.log(state);

        });
        heightWindow.addEventListener('input', () => {
            state[h] = heightWindow.value;
            console.log(state);
        });

    }

    function type(window) {
        typeWindow.forEach((item,i) => [
            item.addEventListener('change', () => {
                state[window] = item.value;
                console.log(state);
            })
        ]);
    }

    function profile(window) {
        checkboxWindow.forEach((item) => {
            item.addEventListener('change', (e) => {
                state[window] = item.nextElementSibling.id;
                console.log(state);
            });
        });
    }

    form('num');
    size('width','height')
    type('type');
    profile('profile');

};

export default dataFromCalc;