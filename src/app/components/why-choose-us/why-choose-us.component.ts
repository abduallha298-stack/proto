import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  features = [
    {
      icon: 'fas fa-dollar-sign',
      title: 'Competitive Pricing',
      description: 'Fair and transparent pricing with no hidden fees. Get quality service without breaking the bank.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Fast Service',
      description: 'Quick turnaround times without compromising quality. Most repairs completed within 24 hours.'
    },
    {
      icon: 'fas fa-medal',
      title: '20+ Years Experience',
      description: 'Decades of expertise in automotive repair with certified technicians and proven track record.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Quality Guarantee',
      description: 'All repairs backed by our comprehensive warranty. Your satisfaction is our top priority.'
    }
  ];
}