import { Injectable } from '@angular/core';

@Injectable()
export class HalfNumberService {

  constructor() { }

  	getHalf(input: number): number {
      return input/2;
  	}

}
