import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment'
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class GitService {
user:User;

  constructor(private http:HttpClient) {
    this.user = new User("","","",0,0,0,0,"","","",);
   }
   userRequest(){
     interface ApiResponse{
      avatar_url: any,
      name: string,
      bio: string,
      public_repos: number,
      public_gists: number,
      followers: number,
      following: number,
      url: string,
      location:string,
      email: string
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.bio = response.bio
        this.user.public_repos = response.public_repos
        this.user.public_gists = response.public_gists
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.url = response.url
        this.user.location = response.location
        this.user.email = response.email
      resolve()
      })
      error=>{}
      
     })
   }
}
