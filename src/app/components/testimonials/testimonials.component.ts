import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      photoUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      quote: 'Excellent service! They fixed my car quickly and the price was very reasonable. Highly recommend to anyone looking for reliable auto repair.'
    },
    {
      name: 'Mike Chen',
      photoUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      quote: 'Professional team with great attention to detail. My car runs like new after their service. Will definitely come back for future maintenance.'
    },
    {
      name: 'Emily Davis',
      photoUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      quote: 'Honest pricing and quality work. They explained everything clearly and completed the repair ahead of schedule. Truly exceptional service!'
    }
  ];

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}