import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Book Management System',
      description:
        'This book management system, built with Spring Boot, Thymeleaf, and MySQL, allows users to add, view, edit, and delete books. It utilizes Spring Boot\'s efficiency, Thymeleaf\'s maintainability, and MySQL\'s structured storage, offering a scalable and flexible solution.',
      technology: 'Spring Boot, Thymeleaf, MySQL',
      image: 'assets/bookstore.jpeg',  
    },
    {
      title: 'Attendance Management Portal',
      description:
        'This Python portal utilizes a machine learning algorithm like face recognition to automate attendance marking. Users register, and the system identifies them through images to mark attendance, increasing accuracy and saving time.',
      technology: 'Python, Machine Learning',
      image: 'assets/attendance.jpeg', 
    },
   
  ];
}
