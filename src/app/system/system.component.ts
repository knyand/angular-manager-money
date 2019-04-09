import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'hm-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  title = 'Home money';
  userName: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const user = this.userService.getUserFromLocalStorage();
    this.userName = user === null ? '' : user.name;
  }

  logout() {
    this.userService.logout();
  }
}
