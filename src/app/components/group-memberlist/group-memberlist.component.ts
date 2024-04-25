import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleUser, User } from '../../structures/user';

@Component({
	selector: 'app-group-memberlist',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './group-memberlist.component.html',
	styleUrl: './group-memberlist.component.sass'
})
export class GroupMemberlistComponent {
	currentGroup = {
		users: [new User(0, "")],
		simpleUsers: [new SimpleUser("", 0)],
	}

	removeMember(id: number): void {

	}
}
