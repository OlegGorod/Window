const images = () => {
    const headerImg = document.querySelector('.works');
    const imgElem = document.createElement('div');
    const img = document.createElement('img');

    imgElem.classList.add('popup');
    imgElem.style.justifyContent = 'center';
    imgElem.style.alignItems = 'center';
    imgElem.style.display = 'none';
    imgElem.append(img)

    headerImg.appendChild(imgElem)


    headerImg.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgElem.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            img.setAttribute('src',path)
        }
        if (target.matches('div.popup')) {
            imgElem.style.display = 'none'
        }
    });

};

export default images;