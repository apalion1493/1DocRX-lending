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
        event.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch('form.php', {
                method: 'POST',
                body: formData
            });
            const data = await response.text();
            document.querySelectorAll('.responseForm').forEach(responseEl => {
                responseEl.innerHTML = data;
                responseEl.classList.remove('hidden');
                setTimeout(() => {
                    responseEl.classList.add('hidden');
                }, 10000);
            })

            form.reset()
        } catch (error) {
            document.querySelectorAll('.responseForm').forEach(responseEl => {
                console.log(error);
                responseEl.innerHTML = 'There was an error sending data.';
                responseEl.classList.remove('hidden');
                setTimeout(() => {
                    responseEl.classList.add('hidden');
                }, 10000);
            })
        }
    });
});