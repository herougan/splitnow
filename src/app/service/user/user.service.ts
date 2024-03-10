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

  // Get

	getGroups(): Observable<Group[]> {
		const groups: Group[] = [{
				id: 0,
				name: "Group 1",
				deleted: false,
				users: [{
				id: 0,
				name: "Kam",
				email: "Kam@Sg.com",
				friendIds: [],
			}],
			transactions: [{
				message: "Transaction 1",
				
				member_ids: [0,],
				payee_id: 0,
				
				amount: 1000,

				currency_id: 0,
				
				comments: [],
				datetime: new Date(),
			},],
			// == Meta ==
			date: new Date(),
		},
		new Group(1, "Group 2")
		]
		return of(groups);
	}

  getFriends(user: User): Observable<User[]> {
	const friends: User[] = []

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

	return of(false)
  }

  // Post
  addFriend(user: User, friend: User): Observable<boolean> {

	return of(false)
  }
}
