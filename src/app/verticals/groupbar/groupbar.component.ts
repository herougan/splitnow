import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CreateGroupComponent } from "../../components/create-group/create-group.component";
import { TransactionsComponent } from "../../components/transactions/transactions.component";
import { GroupsComponent } from "../../components/groups/groups.component";

@Component({
	selector: 'app-groupbar',
	standalone: true,
	templateUrl: './groupbar.component.html',
	styleUrl: './groupbar.component.sass',
	imports: [JsonPipe, CreateGroupComponent, TransactionsComponent, GroupsComponent]
})
export class GroupbarComponent {

}
