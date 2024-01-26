import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { AccountingFormatPipe } from '../pipes/accountingFormat';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.sass',
    imports: [CommonModule, MatIconModule, AccountingFormatPipe]
})
export class DashboardComponent {

  person = { 
    name: "Kammy Leong",
    balance: 0,
};
  n_groups = 0;
  n_friends = 0;

  friends = [{
    name: "Sammy Lang",
  }
  ];


}
