import { isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css',
})
export default class PricingPage implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  //private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    //Si no estamos en el servidor(NO USAR ESTA VERSION ANTIGUA)
    // if (!isPlatformServer(this.platform)) {
    //   document.title = 'Pricing Page';
    // }
    // console.log(this.platform);
    // console.log(isPlatformServer(this.platform));
    // console.log(`Estamos en el ${this.platform}`);
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'decription', content: 'Este es mi Pricing Page' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Victor,Carmona,Curso,Angular,PRO' });
  }

}
