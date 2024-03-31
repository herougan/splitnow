import { Component } from '@angular/core';
import { FriendsComponent } from "../../components/friends/friends.component";
import { User } from '../../structures/user';

@Component({
	selector: 'app-personbar',
	standalone: true,
	templateUrl: './personbar.component.html',
	styleUrl: './personbar.component.sass',
	imports: [FriendsComponent]
})
export class PersonbarComponent {
	user: User = new User(-1, "")
}

// How to inject User from the top
