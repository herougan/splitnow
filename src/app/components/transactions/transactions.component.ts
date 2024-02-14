import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../structures/transaction';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.sass'
})
export class TransactionsComponent {
	transactions: Transaction[] = []
}
