import { Transaction } from "./transaction";
import { User } from "./user";

export class Group {
	
	// == Main ==
	// id: number;
	// users: User[];
	// transactions: Transaction[];

	// // == Meta ==
	// date: Date;
	// deleted?: Boolean;
	
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

	constructor(
		public id: number,
		public name: string,
		public users: User[] = [],
		public transactions: Transaction[] = [],

		public date: Date = new Date(),
		public deleted: Boolean = false,
	) {	}
}