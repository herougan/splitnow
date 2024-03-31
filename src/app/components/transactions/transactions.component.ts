import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../structures/transaction';
import { ForexAccountingFormatPipe } from "../../pipes/forexAccFormat";

@Component({
	selector: 'app-transactions',
	standalone: true,
	templateUrl: './transactions.component.html',
	styleUrl: './transactions.component.sass',
	imports: [CommonModule, ForexAccountingFormatPipe]
})
export class TransactionsComponent {
	transactions: Transaction[] = []

	createTransaction(): void {

	}
}
