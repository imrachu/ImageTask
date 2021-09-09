import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.css']
})
export class ImagePostComponent implements OnInit {

  ngOnInit(): void {
  }

  image: any = [];

  baseURL: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  profileForm = this.fb.group({
    title: [''],
    thumbnail: [''],
    image: ['']
  });
  onSubmit() {
    const imageData = this.profileForm.value;
    const body = JSON.stringify(imageData);
    console.log(body);
    return this.http.post<any>(this.baseURL, body);
  }

}
