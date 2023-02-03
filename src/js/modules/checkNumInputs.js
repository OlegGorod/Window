const checkNumInputs = (selector) => {
    const inputNum = document.querySelectorAll(selector);
    inputNum.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;