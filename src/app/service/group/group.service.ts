import { Injectable } from '@angular/core';
import { Transaction } from '../../structures/transaction';
import { Observable, of } from 'rxjs';
import { Group } from '../../structures/group';
import { SimpleUser, User } from '../../structures/user';
import { GROUPS } from '../../../assets/static/test/data_one';

@Injectable({
	providedIn: 'root'
})
export class GroupService {

	tempGroups: Group[] = []

	constructor() {
		this.tempGroups = GROUPS
	}

	// CDU
	createGroup(group: Group): Observable<Group> {
		group.id = this.tempGroups.length + 1	// How do we set IDs? Let the database handle it. Create it in the db and take the id back.
		this.tempGroups.push(group)
		return of(group)
	}

	deleteGroup(groupId: number): Observable<Boolean> {
		let idx: number = this.tempGroups.findIndex(group => group.id = groupId)
		if (idx > -1) {
			delete this.tempGroups[idx]
			return of(true)
		} else {
			return of(false)
		}
	}

	updateGroup(group: Group): Observable<Group> {
		// Search Group
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == group.id) {
				this.tempGroups[i] = group
				return of(this.tempGroups[i])
			}
		}

		return of(Group.Error("Could not find Group!"))
	}

	searchGroup(searchTerm: string): Observable<Boolean | Group> {
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].name == searchTerm) {
				return of(this.tempGroups[i])
			}
		}

		return of(false)
	}

	addUser(groupId: number, userId: number): Observable<Group> {
		// Search Group
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				this.tempGroups[i].users.push(
					new User(-1, "New User") // TODO
				)
				return of(this.tempGroups[i])
			}
		}

		return of(Group.Error("Cannot add simpleUser: Group not found"))
	}

	addSimpleUser(groupId: number, name: string): Observable<Group> {
		// Search Group
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				this.tempGroups[i].simpleUsers.push(
					new SimpleUser("", -1) // TODO
				)
			}
		}

		// Error
		return of(Group.Error("Cannot add simpleUser: Group not found"))
	}

	removeUser(groupId: number, userId: number): Observable<Group> {
		// Search group
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				// Add User
				for (let u = 0; u < this.tempGroups[i].users.length; ++u) {
					if (this.tempGroups[i].users[u].id == userId) {
						delete this.tempGroups[i].users[u]
						break
					}
				}
				for (let u = 0; u < this.tempGroups[i].simpleUsers.length; ++u) {
					if (this.tempGroups[i].simpleUsers[u].tempId == userId) {
						delete this.tempGroups[i].simpleUsers[u]
						break
					}
				}
			}
		}

		// Error
		return of(Group.Error("Failed to find group {}: Group {} not found"))
	}

	removeSimpleUser(groupId: number, simpleUserId: number): Observable<Group> {
		// Search group
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {

				for (let u = 0; u < this.tempGroups[i].simpleUsers.length; ++u) {
					if (this.tempGroups[i].simpleUsers[u].tempId == simpleUserId) {
						delete this.tempGroups[i].simpleUsers[u]
						return of(this.tempGroups[i])
					}
				}

				return of(Group.Error("Failed to find user {} in group: User {} not found"))
			}
		}

		// Error
		return of(Group.Error("Failed to find group: Group not found"))
	}

	getGroups(userId: number): Observable<Group[]> {
		let groups: Group[] = [
			new Group(0, "Group 1"),
			new Group(1, "Group 2"),
			new Group(2, "Group 3"),
			new Group(3, "Group 4"),
			new Group(4, "Group 5"),
		]

		return of(groups)
	}

	createTransaction(groupId: number, transactionName: string, payeeId: number, amount: number): Observable<Group> {
		// 
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id = groupId) {
				this.tempGroups[i].transactions.push(new Transaction(transactionName, groupId, this.tempGroups[i].transactions.length, [], payeeId, amount, -1))
				return of(this.tempGroups[i])
			}
		}

		return of(Group.Error("Group {} not found"))
	}

	createTransactionSpecific(groupId: number, transactionName: string, payeeId: number, amount: number, memberIds: number[]) {

	}

	getTransaction(groupId: number, transactionId: number): Observable<Transaction> {
		// Search
		let transaction: Transaction = new Transaction("Transaction 1", groupId, -1, [], 0, 50, 0)
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				for (let u = 0; u < this.tempGroups[i].transactions.length; ++u) {
					if (this.tempGroups[i].transactions[u].id == transactionId) {
						return of(this.tempGroups[i].transactions[u])
					}
				}
			}
		}
		return of(transaction)
	}

	updateTransaction(groupId: number, transaction: Transaction): Observable<Boolean> {
		// Search
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				for (let u = 0; u < this.tempGroups[i].transactions.length; ++u) {
					this.tempGroups[i].transactions[u] = transaction
					return of(true)
				}
			}
		}

		// Update
		return of(false)
	}

	deleteTransaction(groupId: number, transactionId: number): Observable<Boolean> {
		// Search
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {

				for (let u = 0; u < this.tempGroups[i].transactions.length; ++u) {
					if (this.tempGroups[i].transactions[u].id == transactionId) {
						delete this.tempGroups[i].transactions[u]
						break
					}
				}
				// No need to continue
				break
			}
		}

		// Delete
		return of(false)
	}

	getTransactions(groupId: number): Observable<Transaction[]> {
		// let transactions: Transaction[] = [
		// 	{
		// 		name: "First time at McDonalds",
		// 		groupId: 0,
		// 		id: 0,
		// 		member_ids: [],
		// 		payee_id: 0,
		// 		amount: 110,

		// 		currency_id: 0,
		// 		comments: [],
		// 		datetime: new Date(),
		// 	},
		// 	{
		// 		name: "Kentucky Birthday Party",
		// 		groupId: 0,
		// 		id: 1,
		// 		member_ids: [],
		// 		payee_id: 0,
		// 		amount: 40,

		// 		currency_id: 0,
		// 		comments: [],
		// 		datetime: new Date(),
		// 	},
		// 	{
		// 		name: "10 Grab sessions",
		// 		groupId: 0,
		// 		id: 2,
		// 		member_ids: [],
		// 		payee_id: 0,
		// 		amount: 31,

		// 		currency_id: 0,
		// 		comments: [],
		// 		datetime: new Date(),
		// 	},
		// 	{
		// 		name: "Makeup Remover",
		// 		groupId: 0,
		// 		id: 3,
		// 		member_ids: [],
		// 		payee_id: 0,
		// 		amount: 26.5,

		// 		currency_id: 0,
		// 		comments: [],
		// 		datetime: new Date(),
		// 	},
		// 	{
		// 		name: "Credit Card Bonus",
		// 		groupId: 0,
		// 		id: 4,
		// 		member_ids: [],
		// 		payee_id: 0,
		// 		amount: -100,

		// 		currency_id: 0,
		// 		comments: [],
		// 		datetime: new Date(),
		// 	},
		// ]
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				return of(this.tempGroups[i].transactions)
			}
		}
		return of([])
	}

	getTotal(groupId: number): Observable<number> {
		let total: number = 0

		this.tempGroups.forEach(group => {
			group.transactions.forEach(transaction => {
				total += transaction.amount
			})
		});

		return of(total)
	}

	/* === Utility === */

	util_getGroup(groupId: number): Group | string {
		for (let i = 0; i < this.tempGroups.length; ++i) {
			if (this.tempGroups[i].id == groupId) {
				return this.tempGroups[i]
			}
		}
		return "Group cannot be found"
	}
}

/* After Notes */
/*

	Errors:
	_______

	Do not log into client console.
	
	Component (Front):
		Display error
	Page (Logic):
		Client log
		Encrypted Log
	Service:
		No logs
		Return "Failure Object"



*/
