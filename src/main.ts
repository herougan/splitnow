import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));





/*
Account CRUD
  Group CRUD
    Transaction CRUD
    Settle Bill
    Send QR Code
    Scan receipt (Tooltip saying each line item is "split by default")
    Create custom receipt construct

*/

/*

  enum Mode {
    dutch = 0,
    individual = 1,
  }


class transaction {
  message: string;
  image: string;
  group_id: int; -> mode: Mode  

  member_ids: int[];
  payee_id = int;

  amount: int;
  currency_id: int;

 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter = new Greeter("world");




*/