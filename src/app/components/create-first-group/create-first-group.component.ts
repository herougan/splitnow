import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Group } from '../../structures/group';
import { User } from '../../structures/user';

@Component({
	selector: 'app-create-first-group',
	standalone: true,
	imports: [JsonPipe, CommonModule, FormsModule],
	templateUrl: './create-first-group.component.html',
	styleUrl: './create-first-group.component.sass'
})
export class CreateFirstGroupComponent {

	// Logic
	works: CreateFirstGroupWorks = new CreateFirstGroupWorks()
	// States
	state: UIState = 0
	templateGroup: Group = Group.Empty()
	templateMember: User = User.Empty()
	// Visibility
	UIState: any = UIState

	// #region == Enter Name ==
	selectName(): void {

	}

	joinInstead(): void {

	}

	// #endregion

	// #region == Add Members ==

	addMember__loseFocus(): void {

	}

	addMember__onInput(): void {

	}

	addMember(): void {

	}

	addMember__nonUser(): void {

	}

	addMember__friend(): void {

	}

	removeMember(index: number): void {

	}

	removeMember__nonUser(index: number): void {

	}

	createGroup(): void {

	}

	launch__emptyGroupDialogue(): void {

	}

	emptyGroupDialogue__Yes(): void {

	}

	emptyGroupDialogue__No(): void {

	}

	// #endregion

	// #region == Search Groups ==

	// #endregion

	// #region == Group Created ==


	// #endregion

	// #region == Error ==

	// #endregion

}

// Page -> Vertical -> Component -> Subcomponent
// -> Works
class CreateFirstGroupWorks {
	templateGroup: Group = Group.Empty()
	templateMember: User = User.Empty()

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

enum UIState {
	EnterName,
	AddMembers,
	SearchGroups,
	EmptyGroupDialogue, // Do not summon dialogue - use a popup within instead
	Created,
}

// TODO;:

// UI Display if entry is not permitted, button greyed out
// Display error if somehow button is clicked
// Display error from db if request goes through but still error
// https://angular.io/guide/form-validation