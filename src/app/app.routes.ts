import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

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
];
export default routeConfig;


