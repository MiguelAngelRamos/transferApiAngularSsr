import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from 'src/app/interfaces/IPhoto';
import { DataPhotoService } from 'src/app/services/data-photo.service';

@Component({
  selector: 'app-photo-id',
  templateUrl: './photo-id.component.html',
  styleUrls: ['./photo-id.component.scss']
})
export class PhotoIdComponent implements OnInit {
  photoId!:IPhoto; 
  constructor( private activateRoute: ActivatedRoute, private dataPhoto: DataPhotoService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe( params => {
      console.log(params);
      let id = Number(params.get('id'));

      this.dataPhoto.getPhotosId(id).subscribe( data => {
        this.photoId = data;
      })
    })
  }

}
// this.activatedRoute.paramMap.subscribe( params => {
//   let id = Number(params.get('id'));
//   // console.log(typeof(Number(params.get('id'))));
//   this.dataService.getUser(id).subscribe(user => this.user = user);
// })