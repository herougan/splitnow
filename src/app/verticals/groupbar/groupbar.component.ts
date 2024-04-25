import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CreateGroupComponent } from "../../components/create-group/create-group.component";
import { TransactionsComponent } from "../../components/transactions/transactions.component";
import { GroupsComponent } from "../../components/groups/groups.component";
import { CreateFirstGroupComponent } from "../../components/create-first-group/create-first-group.component";

@Component({
	selector: 'app-groupbar',
	standalone: true,
	templateUrl: './groupbar.component.html',
	styleUrl: './groupbar.component.sass',
	imports: [JsonPipe, CreateGroupComponent, TransactionsComponent, GroupsComponent, CreateFirstGroupComponent, CommonModule]
})
export class GroupbarComponent {
	first: boolean = true
}
