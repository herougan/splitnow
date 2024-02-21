import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingFormatPipe } from '../pipes/accountingFormat';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGroupFormComponent } from '../new-group-form/new-group-form.component';
import { SimpleUser, User } from '../structures/user';
import { Group } from '../structures/group';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.sass',
    imports: [CommonModule, AccountingFormatPipe, NewGroupFormComponent, FormsModule, ReactiveFormsModule, JsonPipe]
})
export class DashboardComponent {

	// #region Preamble
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

  // #region New group
  newGroupTemp = {
	name: "",
	members: [],
  }

  newGroup(): void {
    console.log("Hello");
	this.editGroupFlag = true;
  }

  newGroupCreateContext(): void {
	if (this.newGroupTemp.name == "") {

	}
	console.log(`Creating new group named ${this.newGroupTemp.name}`)
  }

  // #endregion

  // #region New friend
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


  // #endregion

  // #region UI Control

  groupApplicationStage: GroupApplicationStage = GroupApplicationStage.NewGroup

  // #endregion UI Control

}
enum GroupApplicationStage {
	NewGroup,
	AddPlayers,
}
