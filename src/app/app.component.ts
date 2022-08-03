import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculate-app';
  
  num1 = 0;
  num2 = 0;
  type = '';
  result = 0;

  
  ngOnInit(): void{ }

  printSum(res: any) {
		this.result = res;
	}

  onOptionsSelected(data:any) {
    console.log("data",data.target.value);
    this.type = data.target.value;
  }
}
