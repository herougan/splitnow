import { Injectable } from '@angular/core';
import { User } from '../../structures/user';
import { Group } from '../../structures/group';
import { Transaction } from '../../structures/transaction';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getGroups(): Observable<Group[]> {
    const groups: Group[] = [{
      id: 0,
      users: [{
        id: 0,
        name: "Kam",
        email: "Kam@Sg.com",
      }],
      transactions: [{
        message: "Transaction 1",
        
        member_ids: [0,],
        payee_id: 0,
        
        amount: 1000,
        currency_id: 0,
      
        comments: [],
        datetime: new Date(),
      }],
    
      // == Meta ==
      date: new Date(),
    }]
    return of(groups);
  }
}
