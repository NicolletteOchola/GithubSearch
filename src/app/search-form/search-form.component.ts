import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username:string;
  

  constructor(private userService: UserService) { 
  }
  
  findUser () {
    this.userService.updateUser(this.username);
  }

  ngOnInit() {
  }

}
