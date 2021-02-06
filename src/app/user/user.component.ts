import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { HttpClient } from '@angular/common/http'
import { User } from '../user'
import { Repository } from '../repository'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:User;
userRep?:Repository;

  constructor(private userService:User,gitService:GitService,private http:HttpClient) {
    this.users=userService
   }

  ngOnInit(): void {
  }

}
