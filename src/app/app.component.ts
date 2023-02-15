import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-angular';
  formNumArr = [1, 2, 3, 4]
  stepArr = [
    {
      stepNum: 1,
      stepTxt: "YOUR INFO"

    },
    {
      stepNum: 2,
      stepTxt: "SELECT PLAN",

    },
    {
      stepNum: 3,
      stepTxt: "ADD-ONS",

    },
    {
      stepNum: 4,
      stepTxt: "SUMMARY",

    },
  ]
  num = 10
  isShowing = true

  numPlus(e:any){
    this.num++
    console.log(e.targe)
  }


  toggle(){
    this.isShowing = !this.isShowing
  }
}
