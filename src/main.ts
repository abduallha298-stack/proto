import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { AboutUsComponent } from './app/components/about-us/about-us.component';
import { WhyChooseUsComponent } from './app/components/why-choose-us/why-choose-us.component';
import { ProcessComponent } from './app/components/process/process.component';
import { TestimonialsComponent } from './app/components/testimonials/testimonials.component';
import { AppointmentFormComponent } from './app/components/appointment-form/appointment-form.component';
import { FaqComponent } from './app/components/faq/faq.component';
import { FooterComponent } from './app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    WhyChooseUsComponent,
    ProcessComponent,
    TestimonialsComponent,
    AppointmentFormComponent,
    FaqComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <section id="home">
        <app-hero></app-hero>
      </section>
      <section id="about">
        <app-about-us></app-about-us>
      </section>
      <section id="services">
        <app-why-choose-us></app-why-choose-us>
      </section>
      <app-process></app-process>
      <section id="testimonials">
        <app-testimonials></app-testimonials>
      </section>
      <section id="contact">
        <app-appointment-form></app-appointment-form>
      </section>
      <section id="faq">
        <app-faq></app-faq>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      padding-top: 76px; /* Account for fixed navbar */
    }
    
    section {
      scroll-margin-top: 76px; /* Offset for smooth scrolling with fixed navbar */
    }
  `]
})
export class App {
}

bootstrapApplication(App);