import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user!: IUser;
  constructor(private dataService: DataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.activatedRoute.paramMap.subscribe( params => {
      let id = Number(params.get('id'));
      // console.log(typeof(Number(params.get('id'))));
      this.dataService.getUser(id).subscribe(user => this.user = user);
    })
  }

}
