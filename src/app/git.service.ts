import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment'



@Injectable({
  providedIn: 'root'
})

export class GitService {
user:User;
userProfile:any[] = []


  constructor(private http:HttpClient) {
    this.user = new User("","","",0,0,0,0,"","","",);
   }
   userRequest(search_term:any){
     interface ApiResponse{
      avatar_url: any,
      login: string,
      bio: string,
      public_repos: number,
      public_gists: number,
      followers: number,
      following: number,
      url: string,
      location:string,
      email: string
     }
     let final_url = environment.apiUrl+(<HTMLInputElement>search_term).value+'?access_token='+environment.apiKey
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(final_url).toPromise().then(response=>{  

        this.user = response
       
         
        // let avatar_url = response.avatar_url
        // let name = response.login
        // let bio= response.bio
        // let public_repos = response.public_repos
        // let public_gists = response.public_gists
        // let followers = response.followers
        // let following = response.following
        // let url = response.url
        // let location = response.location
        // let email = response.email
        // let userr= new User(avatar_url,name,bio,public_repos,public_gists,followers,following,url,location,email)

        // this.userProfile.push(userr)
        // console.log(this.userProfile)
      resolve()
      },
       error=>{
        reject()
      }
      )     
     })
     return promise
   }
}
