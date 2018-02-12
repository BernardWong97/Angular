import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numPressed: number = 0;
  displayMessage: boolean = true;
  message: string;

  incNumPressed(){
    this.numPressed++;
  } // incNumPressed()

  showMessage(){
    if(this.displayMessage) {
      this.message = "Look at the star";
      this.displayMessage = false;
    }
    else{
      this.message = "";
      this.displayMessage = true;
    } // if..else displayMessage
  } // showMessage()
} // class AppComponent
