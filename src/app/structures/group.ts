import { Transaction } from "./transaction";
import { SimpleUser, User } from "./user";

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
		// Users
		public users: User[] = [],
		public simpleUsers: SimpleUser[] = [],
		public userOrder: number[] = [],
		// Transactions
		public transactions: Transaction[] = [],
		// Meta
		public date: Date = new Date(),
		public deleted: Boolean = false,
	) { }

	static Empty(): Group {
		return new Group(-1, "Empty")
	}

	static Error(error: string): Group {
		return new Group(-1, error)
	}
}