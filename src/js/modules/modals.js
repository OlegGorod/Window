const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const callEngineerBtn = document.querySelectorAll(triggerSelector);
        const modalEngineer = document.querySelector(modalSelector);
        const modalEngineerClose = document.querySelector(closeSelector);

        callEngineerBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    modalEngineer.style.display = 'block';
                }
            });
        })

        modalEngineerClose.addEventListener('click', () => {
            modalEngineer.style.display = 'none';
        });

        modalEngineer.addEventListener('click', (e) => {
            if (e.target === modalEngineer) {
                modalEngineer.style.display = 'none';
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
        }, time);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup',500000000);


};

export default modals;