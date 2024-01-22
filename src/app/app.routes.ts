import {Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';

const routeConfig: Routes = [
	/* Main Page */
	{
	  path: '',
	  component: DashboardComponent,
	  title: 'Home page',
	},
	/* Login Pager */
	{
	  path: 'login',
	  component: LoginComponent,
	  title: 'Home details',
	},
	/* Group Component */
	{
	  path: 'group/:id',
	  component: GroupComponent,
	  title: 'Home details',
	},
  ];
  export default routeConfig;


