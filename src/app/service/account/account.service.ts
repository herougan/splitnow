import { Injectable } from '@angular/core';
import { User } from '../../structures/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

	static current: User = new User(0, '')

  constructor() { }

  login(): void {
	
  }

  logout(): void {

  }

  // Sign-in Integration

  google_login(): void {

  }
  
  apple_login(): void {
	
  }
}
