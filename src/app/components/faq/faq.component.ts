import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQItem } from '../../interfaces/faq-item.interface';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqItems: FAQItem[] = [
    {
      question: 'How long does a typical repair take?',
      answer: 'Most standard repairs are completed within 24-48 hours. However, the timeframe depends on the complexity of the issue and parts availability. We always provide an estimated completion time when you drop off your vehicle.',
      expanded: false
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes, all our repair work comes with a comprehensive warranty. Parts are covered by manufacturer warranties, and our labor is guaranteed for 12 months or 12,000 miles, whichever comes first.',
      expanded: false
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover. We also offer financing options for larger repairs.',
      expanded: false
    },
    {
      question: 'Do I need an appointment for service?',
      answer: 'While we accept walk-ins, we highly recommend scheduling an appointment to ensure prompt service and minimize wait times. You can book online or call us directly.',
      expanded: false
    },
    {
      question: 'Can you work on all vehicle makes and models?',
      answer: 'Yes, our experienced technicians are trained to work on all domestic and foreign vehicles. We use manufacturer-specific diagnostic equipment and genuine or OEM-equivalent parts.',
      expanded: false
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'We offer free visual inspections and estimates for most services. For complex diagnostic work, there may be a diagnostic fee which is applied toward the repair cost if you choose to proceed.',
      expanded: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }
}