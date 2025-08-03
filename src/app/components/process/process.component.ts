import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  steps = [
    {
      number: '01',
      title: 'Schedule Appointment',
      description: 'Book your appointment online or call us directly'
    },
    {
      number: '02',
      title: 'Diagnostic Check',
      description: 'We perform a comprehensive diagnostic of your vehicle'
    },
    {
      number: '03',
      title: 'Repair Estimate',
      description: 'Receive a detailed estimate with transparent pricing'
    },
    {
      number: '04',
      title: 'Quality Repair',
      description: 'Our certified technicians perform the repair work'
    },
    {
      number: '05',
      title: 'Vehicle Pickup',
      description: 'Pick up your vehicle and hit the road with confidence'
    }
  ];
}