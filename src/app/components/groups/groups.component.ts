import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Group } from '../../structures/group';

@Component({
	selector: 'app-groups',
	standalone: true,
	imports: [JsonPipe, CommonModule],
	templateUrl: './groups.component.html',
	styleUrl: './groups.component.sass'
})
export class GroupsComponent {
	editGroupFlag: boolean = false
	groups: Group[] = []

	selectGroup(): void {

	}
}
