import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentForm } from '../../interfaces/appointment-form.interface';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  isSubmitted = false;
  maxYear = new Date().getFullYear() + 1;

  services = [
    'Oil Change',
    'Brake Repair',
    'Engine Diagnostics',
    'Transmission Service',
    'AC Repair',
    'Tire Services',
    'General Maintenance',
    'Other'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.appointmentForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      carMakeModel: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear() + 1)]],
      serviceRequired: ['', [Validators.required]]
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    
    if (this.appointmentForm.valid) {
      const formData: AppointmentForm = this.appointmentForm.value;
      console.log('Form submitted:', formData);
      
      // Here you would typically send the data to a backend service
      alert('Thank you! Your appointment request has been submitted. We will contact you soon.');
      
      // Reset form
      this.appointmentForm.reset();
      this.isSubmitted = false;
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.appointmentForm.get(fieldName);
    if (field?.errors && (field.dirty || field.touched || this.isSubmitted)) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['pattern']) return 'Please enter a valid phone number';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['min']) return 'Please enter a valid year';
      if (field.errors['max']) return 'Please enter a valid year';
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      fullName: 'Full Name',
      email: 'Email',
      phoneNumber: 'Phone Number',
      carMakeModel: 'Car Make & Model',
      year: 'Year',
      serviceRequired: 'Service Required'
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.appointmentForm.get(fieldName);
    return !!(field?.errors && (field.dirty || field.touched || this.isSubmitted));
  }
}