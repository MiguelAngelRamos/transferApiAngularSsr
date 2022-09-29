import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/IPhoto';
import { DataPhotoService } from 'src/app/services/data-photo.service';

@Component({
  selector: 'app-container-photo',
  templateUrl: './container-photo.component.html',
  styleUrls: ['./container-photo.component.scss']
})
export class ContainerPhotoComponent implements OnInit {

  public photos: IPhoto [] = [];
  constructor(private dataPhotoService: DataPhotoService) { }

  ngOnInit(): void {
    this.dataPhotoService.getPhotos().subscribe(data => {
      data.length = 9;
      this.photos = data
    });
  }

}
