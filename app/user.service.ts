import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getUserDetails(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

  getUserPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }

}
