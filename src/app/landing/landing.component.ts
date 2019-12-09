import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { RepositoryService } from '../repository-service/repository.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  profile: any;
  repos: any;
  userName: string;

  constructor(private userService: UserService, private repositoryService: RepositoryService) { 
    this.userService.getUsers().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.userService.getUsers().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  findUser() {
    this.userService.updateUser(this.userName);
    this.userService.getUserInfo()
    this.profile = this.userService.profile;

    this.repositoryService.updateUser(this.userName);
    this.repositoryService.getRepoInformation()
    this.repos = this.repositoryService.repos;
  }
  ngOnInit() {
  }

}
