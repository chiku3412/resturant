import { Component } from '@angular/core';
import { BreadcrumbBannerComponent } from "../breadcrumb-banner/breadcrumb-banner.component";
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import { ContactSectionComponent } from "../contact-section/contact-section.component";

@Component({
    selector: 'app-gallery',
    imports: [BreadcrumbBannerComponent, LightgalleryModule, ContactSectionComponent],
    templateUrl: './gallery.component.html'
})
export class GalleryComponent {
    settings = {
        counter: false,
        plugins: [lgZoom, lgThumbnail, lgShare, lgRotate, lgFullscreen,],
    };

    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

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
}
