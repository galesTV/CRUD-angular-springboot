import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {
      id: '1',
      name: 'Angular',
      category: 'Frontend'
    },
    {
      id: '2',
      name: 'React',
      category: 'Frontend'
    },
    {
      id: '3',
      name: 'Vue',
      category: 'Frontend'
    },
    {
      id: '4',
      name: 'NodeJS',
      category: 'Backend'
    },
    {
      id: '5',
      name: 'Django',
      category: 'Backend',
    },
    {
      id: '6',
      name: 'Flask',
      category: 'Backend'
    }
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {
  }

}
