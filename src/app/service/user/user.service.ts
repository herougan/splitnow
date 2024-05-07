import { Injectable } from '@angular/core';
import { User } from '../../structures/user';
import { Group } from '../../structures/group';
import { Transaction } from '../../structures/transaction';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { FRIENDSHIPS, GROUPS, USERS } from '../../../assets/static/test/data_one';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	// Note the logic in actuality should be stored on the server

	tempUsers: User[] = []
	tempFriendships: [number, number][] = []

	constructor() {
		// Init
		this.tempFriendships = FRIENDSHIPS
		this.tempUsers = USERS

	}

	// CRUD

	createUser(name: string): Observable<User> {
		let id: number = this.tempUsers.length
		let user: User = new User(id, name)

		this.tempUsers.push(user)

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
	getUser(id: number): Observable<User> {
		for (let i = 0; i < this.tempUsers.length; ++i) {
			if (this.tempUsers[i].id == id) return of(this.tempUsers[i])
		}

		return of(User.Empty())
	}

	server__getUser(id: number): User {
		for (let i = 0; i < this.tempUsers.length; ++i) {
			if (this.tempUsers[i].id == id) return this.tempUsers[i]
		}

		return User.Empty()
	}

	getGroups(): Observable<Group[]> {
		let groups: Group[] = [
			new Group(0, "Group 1",
				[
					new User(0, "Alice"),
					new User(1, "Bob"),
				], [], [], [], new Date(), false),
			new Group(1, "Group 2")
		]
		return of(groups);
	}

	getFriends(user: User): Observable<User[]> {
		let friends: User[] = []
		let _user: User = User.Empty()
		for (let i = 0; i < this.tempFriendships.length; ++i) {
			if (this.tempFriendships[i][0] == user.id) {
				_user = this.server__getUser(this.tempFriendships[i][1])
				if (_user.id > 0) friends.push(_user)
			}
		}

		return of(friends)
	}

	searchFriends(user_id: number, search: string): Observable<User[]> {
		const friends: User[] = []

		return of(friends)
	}

	searchByID(id: number): Observable<User> {

		for (let i = 0; i < this.tempUsers.length; ++i) {
			if (this.tempUsers[i].id == id) {
				return of(this.tempUsers[i])
			}
		}

		return of(User.Empty())
	}

	searchByEmail(email: string): Observable<User> {

		for (let i = 0; i < this.tempUsers.length; ++i) {
			if (this.tempUsers[i].email == email) {
				return of(this.tempUsers[i])
			}
		}

		return of(User.Empty())
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
