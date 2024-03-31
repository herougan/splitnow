import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../structures/user';
import { Group } from '../../structures/group';

@Component({
	selector: 'app-friends',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './friends.component.html',
	styleUrl: './friends.component.sass'
})
export class FriendsComponent {
	newFriendTemp = {
		name: "..."
	}
	groups: Group[] = []
	friends: User[] = []
	friendSearchResults: User[] = []
}
