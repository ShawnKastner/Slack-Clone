import { Component, OnInit } from '@angular/core';
import {  map } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-send-message',
	templateUrl: './send-message.component.html',
	styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
	otherUsers$ = this.usersService.getUsers;
	loggedInUser!: any;
	currentUserProfile$!: any;

	constructor(private usersService: UsersService) {}

 /**
  * The `async ngOnInit(): Promise<void>` method is the initialization method of the `SendMessageComponent` class. It is
  * marked as `async` because it contains asynchronous operations.
  * 
  * @async
  * @method
  * @name ngOnInit
  * @kind method
  * @memberof SendMessageComponent
  * @returns {Promise<void>}
  */
	async ngOnInit(): Promise<void> {
		this.usersService.currentUserProfile$.subscribe((user) => {
			this.loggedInUser = user;
			console.log('auth', this.loggedInUser.uid);

			this.otherUsers$ = this.usersService.getUsers.pipe(
				map((users) => {
					return users.filter((user) => user.uid !== this.loggedInUser.uid);
				})
			);
		});
	}
}
