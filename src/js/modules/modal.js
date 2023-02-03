
const modal = () => {
    function bindModal(buttonSelector, modalSelector, closeSelector) {

        const button = document.querySelectorAll(buttonSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const dataModal = document.querySelectorAll('[data-modal]')


        button.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });



        close.addEventListener('click', (e) => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                dataModal.forEach(item => {
                    item.style.display = 'none';

                });
            }


        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile .popup_calc_profile_close',)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end .popup_calc_end_close',)
}

export default modal;