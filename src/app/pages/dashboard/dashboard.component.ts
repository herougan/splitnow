import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingFormatPipe } from '../../pipes/accountingFormat';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGroupFormComponent } from '../../components/new-group-form/new-group-form.component';
import { SimpleUser, User } from '../../structures/user';
import { Group } from '../../structures/group';
import { JsonPipe } from '@angular/common';
import gsap from 'gsap';
import { UserService } from '../../service/user/user.service';
import { Transaction } from '../../structures/transaction';
import { ForexAccountingFormatPipe } from '../../pipes/forexAccFormat';
import { GroupService } from '../../service/group/group.service';
import { SidebarComponent } from "../../verticals/sidebar/sidebar.component";
import { PersonbarComponent } from "../../verticals/personbar/personbar.component";
import { GroupbarComponent } from "../../verticals/groupbar/groupbar.component";
import { BalancebarComponent } from "../../verticals/balancebar/balancebar.component";
import { CreateFirstGroupComponent } from "../../components/create-first-group/create-first-group.component";

@Component({
	selector: 'app-dashboard',
	standalone: true,
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.sass',
	imports: [CommonModule, AccountingFormatPipe, ForexAccountingFormatPipe, NewGroupFormComponent, FormsModule, ReactiveFormsModule, JsonPipe, SidebarComponent, PersonbarComponent, GroupbarComponent, BalancebarComponent, CreateFirstGroupComponent]
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

	// #region ===== UI: Enter Name =====
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

	// #region ===== UI: Add Members =====

	// ==== Add Friend ===

	newFriendTemp = {
		name: "",
	}
	friendFound = false // Alphabetic matchs
	accountFound = false // Exact match required

	addFriendInput(): void {
		this.friendFound = false
		if (this.newFriendTemp.name == "") {
			console.log("Fail")
			return
		}
		console.log(`Create a new friend named ${this.newFriendTemp.name}`)
		if (this.friends.length > 0)
			console.log(`Searching friend list...`)
	}

	// === Friends Search ===

	friendSearchResults: User[] = [new User(0, "")];
	accountSearchResult: User = new User(0, "");

	searchFriends(phrase: string): void {
		this.userService.searchFriends(this.user.id, phrase).subscribe(results => this.friendSearchResults = results)
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
	userToBeAdded: User = new User(0, "")

	// Add member context actions
	addFriendContextClick(): void {
		console.log(`Add Friend ${this.newFriendTemp.name}`)
		// Get friend

		// Create link
		const other: User = this.userToBeAdded
		if (other.id == -1) {
			console.log("Erronerous friend!") // UI feedback checks & Important console checks here. Main checks in service
			// loggerService.logError("{this.currentUser} failed to add friend:({this.userToBeAdded.name}) into group:({this.currentGroup.name})")
			return
		}
		this.groupService.addUser(this.currentGroup.id, other.id)
	}

	addNonUserContextClick(): void {
		console.log(`Add Non User ${this.newFriendTemp.name}`)

		this.groupService.addSimpleUser(this.currentGroup.id, this.newFriendTemp.name).subscribe(group => {
			this.currentGroup = group
		})

		// Anim

		// this.newMemberSimpleUsers.push(new SimpleUser(this.newFriendTemp.name))
	}

	addUserContextClick(): void {
		console.log(`Add User ${this.newFriendTemp.name}`)
		// loggerService.log("Client: Try to Add user ${} to group ${}")

		// Get user
		const other: User = this.userToBeAdded
		if (other.id == -1) {
			console.log("Erronerous user!") // UI feedback checks & Important console checks here. Main checks in service
			return
		}
		this.groupService.addUser(this.currentGroup.id, other.id)

		// Check if friend (add if not)
		this.userService.isFriend(this.user, other).subscribe(isFriend => {
			// if (isFriend) {
			// 	// Do nothing
			// } else {
			// 	// Otherwise, add friend
			// 	this.userService.addFriend(this.user, other)
			// }
		})
	}

	addFriendFormLoseFocus(): void {
		setTimeout(() => {
			this.newFriendTemp.name = ""
		}, 150);
	}

	removeMember(i: number): void {
		if (i < 0) return
		if (i >= this.currentGroup.users.length) return
		console.log(`Remove ${this.currentGroup.users[i].name}`)
		this.currentGroup.users.splice(i, 1)
	}

	createNewGroup(): void {
		console.log("Create Group");
		this.create_first_group_state = this.currentGroup.users.length == 0 ? CreateFirstGroupUIEnum.EmptyGroupDialogue : CreateFirstGroupUIEnum.Created
		if (this.currentGroup.users.length > 0) this.createGroup()
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
		this.createGroup()
	}

	emptyGroupCancel() {
		console.log("Cancel creating empty group")
		this.create_first_group_state = CreateFirstGroupUIEnum.AddMembers
	}

	// --- Group Created --- //
	currentGroup: Group = Group.Empty()
	new_transaction_text: string = ""
	new_transaction_payee: number = -1
	new_transaction_amount: number = -1

	createTransaction() {
		this.groupService.createTransaction(this.currentGroup.id, this.new_transaction_text, this.new_transaction_payee, this.new_transaction_amount)
	}

	// #endregion

	// #region === Create Transaction UI ===


	//

	// #region ===== UI: Final =====

	// === Animation ===

	// Fetch current ui state from store
	// fetchedState == {} || null

	createGroup(): void {
		this.create_first_group_state = CreateFirstGroupUIEnum.Created
		this.groupService.createGroup(this.currentGroup).subscribe(group => this.currentGroup = group)
		this.getTransactions()

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
			'.dashboard__group-create-success',
			{
				duration: 1.0,
			}
		)


		// Then 
		this.major_ui_state = MajorUIEnum.Group
		var tl2 = gsap.timeline({

		})
		tl2.from(
			'.dashboard__group-transaction-list',
			{
				opacity: 0,
				duration: 1.0,
			}
		).to(
			'.dashboard__group-transaction-list',
			{
				duration: 1.0,
			}
		)
	}

	// === Transaction ===

	transactions: Transaction[] = []

	getTransactions(): void {
		this.groupService.getTransactions(this.currentGroup.id).subscribe(
			t => { this.transactions = t }
		)
	}

	// #endregion UI Control

	// #region ===== Endsay =====

	constructor(private userService: UserService, private groupService: GroupService) {

		//Initialise
		this.init()
	}

	// #endregion ===== Endsay =====

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
	Group,
}
