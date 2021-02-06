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
getUser(
  username:string,
  

){
  return User
}
  constructor() { }
}
