import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'restaurant';
}
