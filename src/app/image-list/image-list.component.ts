import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  imageURL = "https://jsonplaceholder.typicode.com/photos";

  images : any;

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.http.get(this.imageURL)
    .subscribe(res => {
      this.images = res;
      // console.log(this.images);
    });
  }
}
