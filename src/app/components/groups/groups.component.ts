import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-groups',
	standalone: true,
	imports: [JsonPipe],
	templateUrl: './groups.component.html',
	styleUrl: './groups.component.sass'
})
export class GroupsComponent {
	selectGroup(): void {

	}
}
