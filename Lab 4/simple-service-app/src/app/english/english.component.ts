import { Component, OnInit } from '@angular/core';
import { HalfNumberService } from '../half-number.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private halfService: HalfNumberService) { }

  ngOnInit() {
  }

  number : number;
	half : number;

  	getHalf() {
  		this.half = this.halfService.getHalf(this.number);
  	}
}
