import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    },
    {
        path: 'menu',
        loadComponent: () => import('./our-menu/our-menu.component').then((m) => m.OurMenuComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
    },
    {
        path: 'gallery',
        loadComponent: () => import('./gallery/gallery.component').then((m) => m.GalleryComponent),
    }
];
