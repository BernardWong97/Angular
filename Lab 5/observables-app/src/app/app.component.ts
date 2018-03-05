import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) { }
  students: any = [];
  list: any = [];
  keys: any = [];

  ngOnInit() {
    this.dataService.GetStudentData().subscribe(data => {
      this.students = data.students;
    });

    this.dataService.GetWeatherData().subscribe(data => {
      this.list = data.list;
      this.keys = Object.keys(this.list);
    });
  }
}
