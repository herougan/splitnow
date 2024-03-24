import { Injectable } from '@angular/core';
import { User } from '../../structures/user';
import { Group } from '../../structures/group';
import { Transaction } from '../../structures/transaction';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	fakeUsers: User[] = []

	constructor() { }

	// CRUD

	createUser(name: string): Observable<User> {
		let id: number = this.fakeUsers.length
		let user: User = new User(id, name)

		this.fakeUsers.push(user)

		return of(user)
	}

	updateUser(user: User): Observable<Boolean> {
		// Search for user

		// Update user

		return of(false)
	}

	deleteUser(): Observable<Boolean> {
		// Search for user

		// delete user

		return of(false)
	}

	// Friend

	registerFriend(): Observable<Boolean> {


		return of(false)
	}

	deregisterFriend(): Observable<Boolean> {

		return of(false)
	}

	// Group

	inviteUser(): Observable<Boolean> {

		return of(false)
	}

	applyToGroup(): Observable<Boolean> {

		return of(false)
	}

	// Get
	getGroups(): Observable<Group[]> {
		let groups: Group[] = [{
			id: 0,
			name: "Group 1",
			deleted: false,
			//
			users: [
				{
					id: 0,
					name: "Kam",
					email: "Kam@Sg.com",
					friendIds: [],
				},
				new User(-1, "Tooketh", [], "checkers@email.com")
			],
			simpleUsers: [],
			userOrder: [],
			//
			transactions: [
				{
					name: "Transaction User",
					groupId: 1,
					id: 10,

					member_ids: [0,],
					payee_id: 0,

					amount: 1000,

					currency_id: 0,

					comments: [],
					datetime: new Date(),
				},
			],
			// == Meta ==
			date: new Date(),
		},
		new Group(1, "Group 2")
		]
		return of(groups);
	}

	getFriends(user: User): Observable<User[]> {
		const friends: User[] = [
			new User(-1, 'AliceFriend'),
			new User(-1, 'BobFriend'),
			new User(-1, 'CharlieFriend'),
		]

		return of(friends)
	}

	searchFriends(user: User, search: string): Observable<User[]> {
		const friends: User[] = []

		return of(friends)
	}

	getFriendsLimit(user: User, limit: Number, page: Number = 0): Observable<User[]> {
		const friends: User[] = []
		return of(friends)
	}

	tryGet(exact: string): Observable<User> {
		const user: User = new User(0, "")
		return of(user)
	}

	isFriend(user: User, other: User): Observable<boolean> {

		return of(true)
	}

	// Post
	addFriend(user: User, friend: User): Observable<boolean> {

		return of(false)
	}
}
