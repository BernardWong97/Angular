import { Component, OnInit } from '@angular/core';
import { HalfNumberService } from '../half-number.service';

@Component({
  selector: 'app-irish',
  templateUrl: './irish.component.html'
})
export class IrishComponent implements OnInit {

  constructor(private halfService: HalfNumberService) { }

  ngOnInit() {
  }
  uimhir : number;
	leath : number;

  	fuairHalf() {
      this.leath = this.halfService.getHalf(this.uimhir);
  	}


}
