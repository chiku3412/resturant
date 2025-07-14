import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
    swiper!: Swiper;

    ngAfterViewInit(): void {
        this.swiper = new Swiper('.products_swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 6,
            spaceBetween: 20,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            allowTouchMove: false,
        });
    }
}
