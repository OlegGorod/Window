const modal = () => {
    function bindModal(buttonSelector, modalSelector, closeSelector) {

        const button = document.querySelectorAll(buttonSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);


        button.forEach(item => {
            item.addEventListener('click', () => {
                console.log(1)
                modal.style.display = 'block';
            });
        });



        close.addEventListener('click', (e) => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close')
}

export default modal;