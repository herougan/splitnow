import { Transaction } from "./transaction";
import { User } from "./user";

export interface Group {
	
	// == Main ==
	id: number;
	users: User[];
	transactions: Transaction[];

	// == Meta ==
	date: Date;
	deleted: Boolean;
	
	// (user: User): number;

	// /* === CRUD Users === */
	// AddUser(): void {
	// 	return;
	// }
	// DeleteUser(): void {
	// 	return;
	// }
	// Total(): number {
	// 	return;
	// }
	// TotalForUser(): number {
	// 	return;
	// }
	// /* === CRUD Transactions (and shortcuts) === */
	// AddExpenseFromUser(user: User, amount: number) {
	// 	return;
	// }
	// /* === CRUD Groups === */
}