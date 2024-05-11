import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private githubUsername:string='';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUser() {
    return this.httpClient.get(`https://api.github.com/users/${this.githubUsername}`);
  }

  getRepos(){
    return this.httpClient.get(`https://api.github.com/users/${this.githubUsername}/repos`)
  }

  updateProfile(githubUsername:string){
     this.githubUsername= githubUsername;
  }
}
