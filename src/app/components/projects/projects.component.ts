import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'KIIT Rentals',
      description: [
        'Designed a feature-rich MERN-based e-commerce platform for buying, selling, and renting products.',
        'Implemented automated product unlisting, achieving a 60 percent delisting rate in 2 weeks.',
        'Scaled to 100+ active users and 50+ monthly transactions'
      ],
      techStack: ['React', 'Express.js', 'Node', 'Typescript', 'Mongodb', 'JWT-Auth'],
      image: '/assets/kiit-ren.jpg',
      aosImage: 'fade-right'
    },
    {
      title: 'Smart Apply',
      description: [
        'Developed and deployed a smile detection application for elderly residents in Japanese old age homes using computer vision and machine learning algorithms.',
        'Designed and implemented a user-friendly interface using Angular with Flask backend to analyze smiles in real-time.'
      ],
      techStack: ['Angular', 'Python', 'SQL Server', 'AWS'],
      image: '/assets/smile-project.webp',
      aosImage: 'fade-left'
    },
    {
      title: 'Health Spark Chat',
      description: [
        'The project involves the implementation of a receptionist system for tourists and hotel guests, utilizing a multilingual AI avatar.',
        'The system provides assistance and information to guests in multiple languages, enhancing their overall experience while streamlining hotel operations.'
      ],
      techStack: ['Node.js', 'Python', 'OpenAI API', 'Nginx'],
      image: '/assets/ai-receptionist.webp',
      aosImage: 'fade-right'
    },
    {
      title: 'Fuel Efficiency Tracker',
      description: [
        'Developed an AI-powered document query system allowing users to upload PDFs and ask questions based on the document content.',
        'Designed and integrated an Angular-based frontend with a Flask backend for seamless document processing.',
        'Implemented role-based access control, ensuring only authorized users can manage documents.'
      ],
      techStack: ['Angular', 'Tailwind CSS', 'Flask (Python)', 'MongoDB', 'AWS'],
      image: '/assets/docu-query-ai.webp',
      aosImage: 'fade-left'
    }
  ];
}
