import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
    swiper!: Swiper;

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
