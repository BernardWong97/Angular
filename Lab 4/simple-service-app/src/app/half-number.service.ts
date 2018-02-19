import { Injectable } from '@angular/core';

@Injectable()
export class HalfNumberService {

  constructor() { }

	half : number;

  	getHalf(input: number): number {
      this.half = input/2;
      return this.half;
  	}

}
