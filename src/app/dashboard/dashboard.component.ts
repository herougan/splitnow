import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingFormatPipe } from '../pipes/accountingFormat';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGroupFormComponent } from '../new-group-form/new-group-form.component';
import { SimpleUser, User } from '../structures/user';
import { Group } from '../structures/group';
import { JsonPipe } from '@angular/common';
import gsap from 'gsap';
import { UserService } from '../service/user/user.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.sass',
    imports: [CommonModule, AccountingFormatPipe, NewGroupFormComponent, FormsModule, ReactiveFormsModule, JsonPipe]
})

export class DashboardComponent {

	// #region ===== Preamble =====

	// Test Flags
	test_ui = true

	// Flags
	editGroupFlag = false
	newGroupFlag = false

	// People
	person = { 
	name: "Kammy Leong",
	balance: 0,
	};

	friends: SimpleUser[] = [
	// {
	// 	name: "Sammy Lang",
	// }
	];

	groups: Group[] = [
	// {
	// name: "Primary School"
	// },
	]
	// #endregion

	// #region ----- State -----
	// UI State
	major_ui_state: MajorUIEnum = this.groups.length == 0 ? 0 : 1
	create_first_group_state: CreateFirstGroupUIEnum = 0
	create_new_group_state: CreateNewGroupUIEnum = 0
	// Visibility of UIEnum
	MajorUIEnum = MajorUIEnum
	CreateFirstGroupUIEnum = CreateFirstGroupUIEnum
	CreateNewGroupUIEnum = CreateNewGroupUIEnum
	
	// User
	user: User = new User(0, "") // How to maintain user states?

	// #endregion ----- State -----

	// #region ===== Init =====

	// State store TODO
	getAllFriendsStatus: boolean = false
	allFriends: User[] = []

	init(): boolean {

		this.getFriends()

		return true
	}

	getFriends(): void {
		this.getAllFriendsStatus = false

	}

	// #endregion ===== Init =====

	// #region ===== Enter Name =====
	newGroupTemp = {
	name: "",
	members: [],
	}

	selectedName(): void {
	console.log("New Group");
	this.editGroupFlag = true;
	this.create_first_group_state = CreateFirstGroupUIEnum.AddMembers
	}

	newGroupCreateContext(): void {
	if (this.newGroupTemp.name == "") {

	}
	console.log(`Creating new group named ${this.newGroupTemp.name}`)
	}

	// #endregion

	// #region ===== Add Members =====
	newFriendTemp = {
		name: "",
	}
	friendFound = false // Alphabetic matchs
	accountFound = false // Exact match required

	addFriendInput(): void {
		this.friendFound = false
		if (this.newFriendTemp.name == "") {

		}
		console.log(`Create a new friend named ${this.newFriendTemp.name}`)
		if (this.friends.length > 0)
			console.log(`Searching friend list...`)
	}

	// === Friends Search ===
	friendSearchResults: User[] = [new User(0,"",[])];
	accountSearchResult: User = new User(0, "");

	searchFriends(phrase: string): void {
	 	this.userService.searchFriends(this.user, phrase).subscribe(results => this.friendSearchResults = results)

	}

	searchUser(exact: string): void {
		this.accountSearchResult.name = ""
		let tempUser: User = new User(0, "")

		this.userService.tryGet(exact).subscribe(result => tempUser = result)
		if (tempUser.id == 0) {
			console.log(`User "${exact}" not found`)
			return
		}

		this.userService.isFriend(this.user, this.accountSearchResult).subscribe(isFriend => {
			if (isFriend) {
				// Do Nothing
			} else {
				this.accountSearchResult = tempUser
			}
		})
	}

	// === Friends lists ===
	newMemberListResults: SimpleUser[] = [];
	userToBeAdded: User = new User(0, "")

	// Add member context actions
	addFriendContextClick(): void {
		console.log(`Add Friend ${this.newFriendTemp.name}`)
		// Get friend

		// Create link
		
		this.newMemberListResults.push(new SimpleUser(this.newFriendTemp.name))
	}
	addNonUserContextClick(): void {
		console.log(`Add Non User ${this.newFriendTemp.name}`)
		this.newMemberListResults.push(new SimpleUser(this.newFriendTemp.name))
	}
	addUserContextClick(): void {
		console.log(`Add User ${this.newFriendTemp.name}`)
		// Get user
		const other: User = this.userToBeAdded
		if (other.id == 0) {
			console.log("Erronerous user!") // UI feedback checks & Important console checks here. Main checks in service
			return
		}

		// Check if friend (add if not)
		this.userService.isFriend(this.user, other).subscribe(isFriend => {
			if (isFriend) {
				// Do nothing
			} else {
				// Otherwise, add friend
				this.userService.addFriend(this.user, other)
			}
		})

		// ...
		this.newMemberListResults.push(new SimpleUser(this.newFriendTemp.name))
	}

	addFriendFormLoseFocus(): void {
		setTimeout(() => {
			console.log("Lost focus")
			this.newFriendTemp.name = ""
		}, 50);
	}

	removeMember(i: number): void {
		if (i < 0) return
		if (i >= this.newMemberListResults.length) return
		console.log(`Remove ${this.newMemberListResults[i].name}`)
		this.newMemberListResults.splice(i, 1)
	}

	createGroup(): void {
		console.log("Create Group");
		this.create_first_group_state = this.friends.length == 0 ? CreateFirstGroupUIEnum.EmptyGroupDialogue : CreateFirstGroupUIEnum.Created
	}

	goToJoinGroup(): void {
		console.log("Join Group")
		this.major_ui_state = MajorUIEnum.JoinGroup
	}

	congratulations() {
	// var tl = gsap.timeline({})
	// tl.to('.transaction', {})
	// tl.to('.transaction', {})
	}

	// ----- Are you Sure ----- //
	emptyGroupConfirmation() {
		console.log("Create empty group")
		this.goToCreated()
	}

	emptyGroupCancel() {
		console.log("Cancel creating empty group")
		this.create_first_group_state = CreateFirstGroupUIEnum.AddMembers
	}

	// #endregion

	// #region ===== UI Control =====

	// Fetch current ui state from store
	// fetchedState == {} || null

	goToCreated(): void {
		this.create_first_group_state = CreateFirstGroupUIEnum.Created
		var tl = gsap.timeline({

		})
		tl.from(
			'.dashboard__group-create-success',
			{
				xPercent: -10,
				opacity: 0,
				duration: 1.0,
			}
		).to(
			'.dashboard__group-transaction-list',
			{
				opacity: 0,
				duration: 1.0,
			}
		).from(
			'.dashboard__group-create-success',
			{
				duration: 1.0,
			}
		).to(
			'.dashboard__group-transaction-list',
			{
				duration: 1.0,
			}
		)
	}

	// #endregion UI Control

	constructor(private userService: UserService) {

		//Initialise
		this.init()
	}

}

enum CreateFirstGroupUIEnum {
	EnterName,
	AddMembers,
	EmptyGroupDialogue,
	Created,
}
enum CreateNewGroupUIEnum {

}
enum MajorUIEnum {
	CreateFirstGroup,
	CreateNewGroup,
	JoinGroup,
}
