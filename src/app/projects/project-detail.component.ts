// project-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  template: `
    <h2>Project Detail</h2>
    <p>Project ID: {{ projectId }}</p>
    <p>Title: {{ title }}</p> <!-- Add this line -->
  `,
  styles: [],
})
export class ProjectDetailComponent implements OnInit {
  projectId!: string; // Add the non-null assertion operator
  title = 'Project Detail Title'; // Add this line

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id')!;
  }
}
