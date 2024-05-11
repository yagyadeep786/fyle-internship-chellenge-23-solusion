import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userData:any;
  repos:any[]=[];
  count:any;
  username:string='';
  x:number=1;
  constructor(
    private apiService: ApiService
  ) {
    this.count=1;
  }

  ngOnInit() {

  }

  findProfile(){
    console.log(this.username)
    this.apiService.updateProfile(this.username);

    if(this.username != ''){
      this.apiService.getUser().subscribe(profile =>{
        console.log(profile);
        this.userData= profile;
      });
  
      this.apiService.getRepos().subscribe((repos:any)=>{
        console.log(repos);
        this.x= (repos.length);
        let ecount= this.count*10;
        let scount= ecount-10; 
        this.repos= repos.slice(scount,ecount) as any[];
      })
    }
  }

  updatePage(num:number){
    if(this.count>=1 && this.count< Math.ceil(this.x/10))
    this.count+=num;
    this.findProfile();
  }
}
