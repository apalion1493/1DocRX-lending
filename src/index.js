import './styles.css';
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import mask from '@alpinejs/mask';
import focus from '@alpinejs/focus';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(mask)
Alpine.plugin(focus)
Alpine.start()

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelectorAll('.ajax-form').forEach(form => {
    form.addEventListener('submit', async event => {
        event.preventDefault(); // Предотвратить обычную отправку формы

        const formData = new FormData(form);
        const formId = form.id;
        const responseDivId = `response${formId.replace('form', '')}`;
        const thankYouDivId = `thank-you${formId.replace('form', '')}`;

        try {
            const response = await fetch('process.php', { // Путь к вашему PHP-скрипту
                method: 'POST',
                body: formData
            });
            const data = await response.text();
            document.getElementById(responseDivId).innerHTML = data; // Обработка ответа от PHP-скрипта
            document.getElementById(thankYouDivId).style.display = 'block'; // Показать сообщение благодарности
        } catch (error) {
            document.getElementById(responseDivId).innerHTML = 'There was an error sending data.';
        }

        // // Симуляция ответа сервера
        // setTimeout(() => {
        //     // Показываем блок "Спасибо"
        //     document.getElementById(responseDivId).classList.remove('hidden');
        // }, 1000); // Задержка для симуляции сетевого запроса
    });
});