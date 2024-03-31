import { Component } from '@angular/core';
import { AccountingFormatPipe } from "../../pipes/accountingFormat";
import { User } from '../../structures/user';
import { CommonModule } from '@angular/common';
import { GroupMemberlistComponent } from "../../components/group-memberlist/group-memberlist.component";

@Component({
	selector: 'app-balancebar',
	standalone: true,
	templateUrl: './balancebar.component.html',
	styleUrl: './balancebar.component.sass',
	imports: [CommonModule, AccountingFormatPipe, GroupMemberlistComponent]
})
export class BalancebarComponent {
	// person: User = new User(-1, "Test Name")
	person = {
		balance: 0,
	}
}
