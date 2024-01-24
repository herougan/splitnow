import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
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
