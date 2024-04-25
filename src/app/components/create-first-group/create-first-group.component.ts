import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Group } from '../../structures/group';
import { SimpleUser, User } from '../../structures/user';
import { UserService } from '../../service/user/user.service';
import { GroupService } from '../../service/group/group.service';

@Component({
	selector: 'app-create-first-group',
	standalone: true,
	imports: [JsonPipe, CommonModule, FormsModule],
	templateUrl: './create-first-group.component.html',
	styleUrl: './create-first-group.component.sass'
})
export class CreateFirstGroupComponent {

	// Account
	user: User = User.Empty()
	friends: User[] = []

	// Logic
	object: CreateFirstGroupObject = new CreateFirstGroupObject()
	searchObject: SearchGroupObject = new SearchGroupObject()
	validator: CreateFirstGroupValidator = new CreateFirstGroupValidator()
	// States
	state: UIState = UIState.EnterName
	// Service

	// Visibility
	UIState: any = UIState

	// #region == Enter Name ==

	selectName(): void {
		console.log("New Group");
		/* === Input Validation === */
		this.validator.validateGroup(this.object.templateGroup)
		if (!this.validator.pass) {
			console.log("Invalid Name")
			return
		}
		/* === Server Validation === 
			No need, names can be duplicate
		*/
		/* === Error Checking === 
			No need, always valid
			No API calls made
		*/
		this.state = UIState.AddMembers
	}
	/*
	L0: Display error text on input
	L1: Display error text upon UI validation // Best to combine L0 and L1. (Change HTML)
	L1.5: Display error text before sending server request (Packet attack)
	L2: Display error text upon server request
	L2.5: Display error text from fraudulent API call
	*/

	joinInstead(): void {
		this.state = UIState.SearchGroups
	}

	cancelJoining(): void {
		this.state = UIState.AddMembers
	}

	// #endregion

	// #region == Join Group ==

	joinGroup_timeoutID: ReturnType<typeof setTimeout> | undefined

	joinGroup__onInput(): void {
		// Reset timer
		if (this.joinGroup_timeoutID)
			clearTimeout(this.joinGroup_timeoutID);
		// Search in 0.3s
		this.joinGroup_timeoutID = setTimeout(this.addMember__updateDisplay, 300);
	}

	joinGroup__updateDisplay(): void {
		this.groupService.searchGroup(this.searchObject.searchTerm)
	}

	// #endregion

	// #region == Add Members ==

	addMember_timeoutID: ReturnType<typeof setTimeout> | undefined

	addMember__loseFocus(): void {

	}

	addMember__onInput(): void {
		// Reset timer
		if (this.addMember_timeoutID)
			clearTimeout(this.addMember_timeoutID);
		// Search in 0.3s
		this.addMember_timeoutID = setTimeout(this.addMember__updateDisplay, 300);
	}

	addMember__updateDisplay(): void {

		// Search friends with that name

		// Search by ID
	}

	addMember(): void {

	}

	addMember__nonUser(): void {
		console.log(`Add Non user ${this.object.templateString}`)

		// Validate
		let name = this.object.templateString
		name = name.trim()
		name = name.replace(/ +(?= )/g, '');
		this.validator.validateNonUser(name)

		if (!this.validator.pass)
			return

		// Add nonuser as a member
		// this.object.templateGroup.users.push(User.NonUser()) or allow User | NonUser
		this.object.templateGroup.simpleUsers.push(new SimpleUser(name, this.object.templateGroup.nextNonUserID()))

		// Removes double white spaces
		// *This informs future UI decisions and product vision - users and non users are not equal
		this.object.templateString = ""
	}

	addMember__friend(): void {
		console.log(`Add Friend ${this.object.templateString}`)
		// Get friend
		// this.userService.searchFriends(this.user.id, this.object.templateString)

		this.validator.validateUser(this.object.templateFriend)
		if (!this.validator.pass) return

		for (let i = 0; i < this.friends.length; ++i) {
			// TODO change to contains, not equals
			if (this.friends[i].name.includes(this.object.templateFriend.name)) {
				this.object.templateFriend.id = this.friends[i].id
				break
			}

			// Highlight part of name that matches?
			// return number (+length)
		}

		// Create link
		if (this.object.templateFriend.id == -1) {
			console.log("Friend doesn't exist!") // UI feedback checks & Important console checks here. Main checks in service
			// loggerService.logError("{this.currentUser} failed to add friend:({this.userToBeAdded.name}) into group:({this.currentGroup.name})")
			return
		}

		if (!this.validator.pass)
			return

		// Add to template group only
		this.object.templateGroup.users.push({ ...this.object.templateMember })
		// OR let user2: User = Object.create(this.object.templateMember)
		// this.groupService.addUser(this.object.templateGroup.id, this.object.templateMember.id)

		// Clear text
		this.object.templateString = ""
	}

	removeMember(index: number): void {
		console.log(`Remove Friend @${index}`)

		if (index > -1 && index < this.object.templateGroup.users.length) {
			this.object.templateGroup.users.splice(index, 1);
		}
	}

	removeMember__nonUser(index: number): void {

	}

	createGroup(): void {

		if (this.object.templateGroup.users.length == 0) {
			this.state = UIState.EmptyGroupDialogue
			// or
			this.launch__emptyGroupDialogue()
		}
		else this.state = UIState.Created

		// Assign group id
		this.object.templateGroup.id = 0 // ?
	}

	launch__emptyGroupDialogue(): void {
		console.log("UI-Launch: Empty Group Dialogue")
	}

	emptyGroupDialogue__Yes(): void {
		console.log("EmptyGroup Dialogue: Reply: Yes")
	}

	emptyGroupDialogue__No(): void {
		console.log("EmptyGroup Dialogue: Reply: No")
	}

	// Filtering methods

	to_filter: boolean = false
	fastFilter(term: string): User[] {
		this.to_filter = true // If to_filter set to false, stop current search
		let filtered: User[] = []

		for (let i = 0; i < this.friends.length; ++i) {
			if (this.to_filter) {
				this.to_filter = true
				return []
			}

			if (this.friends[i].name.includes(term)) {
				filtered.push({ ...this.friends[i] })
			}
		}

		return filtered
	}

	// #endregion

	// #region == Search Groups ==

	// #endregion

	// #region == Group Created ==

	// Bubble out
	groupCreated(): void {

	}

	// #endregion

	// #region == Error ==

	// #endregion

	// #region Body

	constructor(private userService: UserService, private groupService: GroupService) {
		//Initialise
		this.user.name = "Player"
		this.user.id = 0
	}

	initUser() {

	}

	initFriends() {
		this.userService.getFriends(this.user).subscribe(
			friends => this.friends = friends)
	}
	// #endregion Body
}

// #region Structure

// Page -> Vertical -> Component -> Subcomponent
// -> Object
class CreateFirstGroupObject {
	templateGroup: Group = Group.Empty()
	templateMember: User = User.Empty()
	templateString: string = ""
	templateFriend: User = User.Empty()

	isNameable(): boolean {
		return false
	}

	isCreatable(): boolean {
		return false
	}

	isAddable(): boolean {
		return false
	}

}

class SearchGroupObject {
	searchTerm: string = ""
}

class CreateFirstGroupValidator {

	pass: boolean = true
	// UI Error, validation error
	error = {
		msg: "",
		id: -1,
	}

	static GROUP_ERROR = {
		msg: "Group contains invalid parameters",
		id: 100,
	}
	static USER_ERROR = {
		msg: "User contains invalid parameters",
		id: 50,
	}

	static SPECIAL_CHAR_FORMAT = "/[^\x00-\x7F]/"
	static SPECIAL_CHAR_REGEXP: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

	validateGroup(group: Group): void {
		// Invalid group name
		this.error = { ...CreateFirstGroupValidator.GROUP_ERROR }

		if (group.name && CreateFirstGroupValidator.SPECIAL_CHAR_REGEXP.test(group.name)) {
			this.error.msg = "Name cannot contain special characters"
			return
		}

		if (group.name.length < 5) {
			this.error.msg = "Name has to be at least 5 characters!"
			this.pass = false
			return
		}

		this.pass = true
	}

	validateUser(user: User): void {
		this.pass = false
		this.error.id = 2

		if (user.id < 0) {
			this.error.msg = "Invalid user"
			return
		}

		this.pass = true
	}

	validateNonUser(name: string): void {
		this.pass = false
		this.error.id = 3

		if (name.length < 3) {
			this.error.msg = "Too short a name"
			return
		}
		// Name cannot contain %, $

		if (name && CreateFirstGroupValidator.SPECIAL_CHAR_REGEXP.test(name)) {
			this.error.msg = "Name cannot contain special characters"
			return
		}

		// if (name.match(CreateFirstGroupValidator.SPECIAL_CHAR_FORMAT)) { // TODO doesn't work
		// 	this.error.msg = "Name cannot contain special characters"
		// 	return
		// }

		this.pass = true
	}
}

// How to display Error?
class ErrorObject {
	displayError() {

	}
}

enum UIState {
	EnterName,
	AddMembers,
	SearchGroups,
	EmptyGroupDialogue, // Do not summon dialogue - use a popup within instead
	Created,
}

// #endregion

// TODO;:

// UI Display if entry is not permitted, button greyed out
// Display error if somehow button is clicked
// Display error from db if request goes through but still error
// https://angular.io/guide/form-validation