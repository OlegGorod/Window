import './slider';
import modal from './modules/modal.js';
import tabs from './modules/tabs';
import forms from './modules/forms';
import timer from './modules/timer';
import checkNumInputs from './modules/checkNumInputs';
import dataFromCalc from './modules/dataFromCalc';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    const dataState = {};


    checkNumInputs();
    modal();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img', '.big_img > img', 'do_image_more')
    forms(dataState);
    timer();
    dataFromCalc(dataState);
    images();
});

