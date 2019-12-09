import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service/user.service';
import { RepositoryService} from 'src/app/repository-service/repository.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos:any;
  profile:any;
  userName:string;

  constructor(private userService:UserService, private repositoryServive:RepositoryService) { }
  findRepo() {
    this.repositoryServive.updateUser(this.userName);
    this.repositoryServive.getRepoInformation();
    this.repos = this.repositoryServive.repos;
  }

  ngOnInit() {
  }

}
