import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser [] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsersAll().subscribe( dataUsers => {
      this.users = dataUsers;
    })
  }

}
