import { Injectable } from '@angular/core';
import { Transaction } from '../../structures/transaction';
import { Observable, of } from 'rxjs';
import { Group } from '../../structures/group';
import { SimpleUser, User } from '../../structures/user';

@Injectable({
	providedIn: 'root'
})
export class GroupService {

	fakeGroups: Group[] = []

	constructor() { }

	// CDU
	createGroup(group: Group): Observable<Group> {
		group.id = this.fakeGroups.length + 1	// How do we set IDs? Let the database handle it. Create it in the db and take the id back.
		this.fakeGroups.push(group)
		return of(group)
	}

	deleteGroup(groupId: number): Observable<Boolean> {
		let idx: number = this.fakeGroups.findIndex(group => group.id = groupId)
		if (idx > -1) {
			delete this.fakeGroups[idx]
			return of(true)
		} else {
			return of(false)
		}
	}

	updateGroup(group: Group): Observable<Group> {
		// Search Group
		// TODO foreach continues and doesn't stop returning apparently - use a flag.
		this.fakeGroups.forEach(_group => {
			if (_group.id == group.id) {
				_group = group
				return of(_group)
			}
		})
		// Update group

		return of(Group.Error("Could not find Group!"))
	}

	addUser(groupId: number, userId: number): Observable<Group> {
		// Search Group
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) {
				// Search Users
				// ... users.forEach(user = {})

				// Add User
				group.users.push(
					new User(-1, "New User")
				)
				return of(group)
			}
		})

		return of(Group.Error("Cannot add simpleUser: Group not found"))
	}

	addSimpleUser(groupId: number, name: string): Observable<Group> {
		// Search Group
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) {
				// Add User
				group.simpleUsers.push(
					new SimpleUser(name, group.simpleUsers.length)
				)
				return of(group)
			}
		})

		// Error
		return of(Group.Error("Cannot add simpleUser: Group not found"))
	}

	removeUser(groupId: number, userId: number): Observable<Group> {
		// Search group
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) {
				// Add User
				let idx: number = group.users.findIndex(user => user.id == userId)

				if (idx > -1) {
					delete group.users[idx]
				} else {
					// loggerService.logError("Failed to remove user: User {} not found in group {}")
					return of(Group.Error("Failed to find user {} in group: User {} not found"))
				}

				return of(group)
			}
		})

		// Error
		return of(Group.Error("Failed to find group {}: Group {} not found"))
	}

	removeSimpleUser(groupId: number, simpleUserId: number): Observable<Group> {
		// Search group
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) {
				// Add User
				let idx: number = group.simpleUsers.findIndex(simpleUser => simpleUser.tempId == simpleUserId)

				if (idx > -1) {
					delete group.users[idx]
				} else {
					// loggerService.logError("Failed to remove user: User {} not found in group {}")
					return of(Group.Error("Failed to find user {} in group: User {} not found"))
				}

				return of(group)
			}
		})

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

	createTransaction(groupId: number, transaction: Transaction): Observable<Group> {
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) {
				// let transaction: Transaction = new Transaction()
				// Insert transaction
				group.transactions.push(transaction)
				return of(group)
			}
		})
		return of(Group.Error("Group {} not found"))
	}

	getTransaction(groupId: number, transactionId: number): Observable<Transaction> {
		let transaction: Transaction = new Transaction("Transaction 1", groupId, -1, [], 0, 50, 0)

		return of(transaction)
	}

	updateTransaction(groupId: number, transaction: Transaction): Observable<Boolean> {
		// Search
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) {
				group.transactions.forEach(_transaction => {
					if (transaction.id == _transaction.id) {

					}
				})
			}
		})

		// Update
		return of(false)
	}

	deleteTransaction(groupId: number, transactionId: number): Observable<Boolean> {
		// Search

		// Delete
		return of(false)
	}

	getTransactions(groupId: number): Observable<Transaction[]> {
		let transactions: Transaction[] = [
			{
				name: "First time at McDonalds",
				groupId: 0,
				id: 0,
				member_ids: [],
				payee_id: 0,
				amount: 110,

				currency_id: 0,
				comments: [],
				datetime: new Date(),
			},
			{
				name: "Kentucky Birthday Party",
				groupId: 0,
				id: 1,
				member_ids: [],
				payee_id: 0,
				amount: 40,

				currency_id: 0,
				comments: [],
				datetime: new Date(),
			},
			{
				name: "10 Grab sessions",
				groupId: 0,
				id: 2,
				member_ids: [],
				payee_id: 0,
				amount: 31,

				currency_id: 0,
				comments: [],
				datetime: new Date(),
			},
			{
				name: "Makeup Remover",
				groupId: 0,
				id: 3,
				member_ids: [],
				payee_id: 0,
				amount: 26.5,

				currency_id: 0,
				comments: [],
				datetime: new Date(),
			},
			{
				name: "Credit Card Bonus",
				groupId: 0,
				id: 4,
				member_ids: [],
				payee_id: 0,
				amount: -100,

				currency_id: 0,
				comments: [],
				datetime: new Date(),
			},
		]

		return of(transactions)
	}

	getTotal(groupId: number): Observable<number> {
		let total: number = 0

		this.fakeGroups.forEach(group => {
			group.transactions.forEach(transaction => {
				total += transaction.amount
			})
		});

		return of(total)
	}

	/* === Utility === */

	util_getGroup(groupId: number): Group | string {
		this.fakeGroups.forEach(group => {
			if (group.id == groupId) return group
		})
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
