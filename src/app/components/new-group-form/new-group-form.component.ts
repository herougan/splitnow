import { Component } from '@angular/core';
import { Group } from '../../structures/group';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../structures/user';
import { Transaction } from '../../structures/transaction';

@Component({
	selector: 'app-new-group-form',
	standalone: true,
	imports: [JsonPipe, FormsModule, ReactiveFormsModule, CommonModule],
	templateUrl: './new-group-form.component.html',
	styleUrl: './new-group-form.component.sass'
})
export class NewGroupFormComponent {

	user: User = new User(0, "Castor Gin", []);
	n_friends = this.user.friendIds;

	activated = false;
	activated__addPeople = false;

	model = new Group(
		18,
		"Oxfords",
		[
			new User(0, "Alice"),
		],
		[],
		[],
		[
			new Transaction("Buffet", -1, -1, [], 0, 100, 0, "Jakarta"),
		],
	);

	onSelectName() {
		if (this.activated)
			this.activated__addPeople = true;
	}
}
