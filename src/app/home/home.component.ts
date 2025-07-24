import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import lgFullscreen from "lightgallery/plugins/fullscreen";

@Component({
    selector: 'app-home',
    imports: [LightgalleryModule],
    templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
    swiper!: Swiper;

    settings = {
        counter: false,
        plugins: [lgZoom, lgThumbnail, lgShare, lgRotate, lgFullscreen,],
    };
    
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

    foodImages = [
        {image: 'images/banner-1.png'},
        {image: 'images/banner-2.png'},
        {image: 'images/banner-3.png'},
        {image: 'images/banner-4.png'},
        {image: 'images/banner-5.png'},
        {image: 'images/banner-6.png'},
    ]

    Menus = [
        {image:'images/menu-slider-1.jpg', tag: 'NEW DISHES', price: '$59', name: 'FOUR CHEESE GARLIC BREAD', category: 'Toasted French bread, cheddar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla semper nulla in pulvinar.'},
        {image:'images/menu-slider-2.jpg', tag: 'NEW DISHES', price: '$49', name: 'FOUR CHEESE GARLIC BREAD', category: 'Toasted French bread, cheddar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla semper nulla in pulvinar.'},
        {image:'images/menu-slider-3.jpg', tag: 'NEW DISHES', price: '$39', name: 'FOUR CHEESE GARLIC BREAD', category: 'Toasted French bread, cheddar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla semper nulla in pulvinar.'},
        {image:'images/menu-slider-1.jpg', tag: 'NEW DISHES', price: '$29', name: 'FOUR CHEESE GARLIC BREAD', category: 'Toasted French bread, cheddar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla semper nulla in pulvinar.'},
        {image:'images/menu-slider-2.jpg', tag: 'NEW DISHES', price: '$59', name: 'FOUR CHEESE GARLIC BREAD', category: 'Toasted French bread, cheddar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla semper nulla in pulvinar.'},
        {image:'images/menu-slider-3.jpg', tag: 'NEW DISHES', price: '$15', name: 'FOUR CHEESE GARLIC BREAD', category: 'Toasted French bread, cheddar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla semper nulla in pulvinar.'},
    ]

    foodMenu = [
        { image:'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image:'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image:'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image:'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image:'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
    ]

    galleryImage : string[] = [
        'images/Gallery/1.jpg',
        'images/Gallery/2.jpg',
        'images/Gallery/3.jpg',
        'images/Gallery/4.jpg',
        'images/Gallery/5.jpg',
        'images/Gallery/6.jpg',
        'images/Gallery/7.jpg',
        'images/Gallery/8.jpg',
        'images/Gallery/9.jpg',
        'images/Gallery/10.jpg'
    ]

    ngAfterViewInit(): void {
        this.swiper = new Swiper('.menu_swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 20,
            speed: 5000,
            autoplay: true,
            allowTouchMove: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }
            },
        });
    }
}
