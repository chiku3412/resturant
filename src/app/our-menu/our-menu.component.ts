import { Component } from '@angular/core';
import { BreadcrumbBannerComponent } from "../breadcrumb-banner/breadcrumb-banner.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-our-menu',
    imports: [BreadcrumbBannerComponent, CommonModule],
    templateUrl: './our-menu.component.html'
})
export class OurMenuComponent {
    selectedTab: string = 'tab1';

    selectTab(tab: string) {
        this.selectedTab = tab;
    }

    foodMenu = [
        { image: 'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image: 'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image: 'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image: 'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
        { image: 'images/meal-list-1-1.jpg', foodName: 'El Pulled pork burrito', foodPrice: '$12', foodDescription: 'Classic greek salad, barrel aged feta cheese, bread' },
    ]
}
