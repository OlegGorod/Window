import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('.form');
    const input = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        success: 'Форма отправлена',
        loading: 'Загрузка...',
        failure: 'Что то пошло не так.'
    }

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        });
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                    .then( () => {
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });

        });
    });


};

export default forms;