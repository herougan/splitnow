import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-create-group',
	standalone: true,
	imports: [JsonPipe, CommonModule],
	templateUrl: './create-group.component.html',
	styleUrl: './create-group.component.sass'
})
export class CreateGroupComponent {

	enterName(): void {

	}

	selectUser(): void {

	}

	selectNameAsUser(): void {

	}
}


class CreateGroupPage {

}