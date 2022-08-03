import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  num1:number = 0;

  @Input()
	num2: number = 0;

  @Input() 
  type:string = '';

  @Output()
	addNumEvent = new EventEmitter<number>();

  sum = '';

  constructor() { }

  ngOnInit(): void {
    console.log('num1',this.num1);
    console.log('num1',this.num2);
    
    
  }


  showResult() {
    // console.log("type",this.type);

    let result = 0;  //Modify the Value

//     var promise = new Promise((resolve, reject) => {
//       switch(this.type) {
//         case 'add':
//         resolve(result = Number(this.num1) + Number(this.num2));
//         break;

//         case 'sub':
//         resolve(result = Number(this.num1) - Number(this.num2));
//         break;

//         case 'mul':
//         resolve(result = Number(this.num1) * Number(this.num2));
//         break;

//         case 'div':
//         resolve(result = Number(this.num1) / Number(this.num2));
//         break;

//         default :
//         reject('Error, please choose type');
//       }
//       });
//     promise.then((value) => {
//   console.log(value); 
// });

// promise.catch((error) => {
//   console.error(error); 
// });

    switch(this.type) {
      // Dropdown value is addition
      case 'add':
        result = Number(this.num1) + Number(this.num2);
        break;
      
      // Dropdown value is subtraction
      case 'sub':
        result = Number(this.num1) - Number(this.num2);
        break;
      
      // Dropdown value is multiplication
      case 'mul':
        result = Number(this.num1) * Number(this.num2);
        break;
        
      // Dropdown value is division
      case 'div':
        result = Number(this.num1) / Number(this.num2);
        break;
        
    }

    this.addNumEvent.emit(result);
	
  
}


}