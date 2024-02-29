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

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.sass',
    imports: [CommonModule, AccountingFormatPipe, NewGroupFormComponent, FormsModule, ReactiveFormsModule, JsonPipe]
})

export class DashboardComponent {

	// #region ===== Preamble =====
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

	// TODO ask stackoverflow
	// UI State
	major_ui_state: MajorUIEnum = this.groups.length == 0 ? 0 : 1
	create_first_group_state: CreateFirstGroupUIEnum = 0
	create_new_group_state: CreateNewGroupUIEnum = 0
	// Visibility of UIEnum
	MajorUIEnum = MajorUIEnum
	CreateFirstGroupUIEnum = CreateFirstGroupUIEnum
	CreateNewGroupUIEnum = CreateNewGroupUIEnum

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

	newFriendCreateContext(): void {
		if (this.newFriendTemp.name == "") {

		}
		console.log(`Create a new friend named ${this.newFriendTemp.name}`)
		if (this.friends.length > 0)
			console.log(`Searching friend list...`)
		}

		// Friends Search
		friendSearchResults: User[] = [new User(0,"",[])];

		friendContextClick(): void {
		console.log(`Add {name}`)
	}

	addFriendFormLoseFocus(): void {
		this.newFriendTemp.name = ""
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
