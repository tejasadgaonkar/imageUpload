import { Component } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ImageuploadService } from './imageupload.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [];
  imageBlobUrl;falg;
  constructor(private imageuploadService: ImageuploadService){
  }
  
  ngOnInit() {
    this.getAllImages();
  }
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });

  getAllImages() {
    this.imageuploadService.getIds().subscribe((data) => {
      this.images = data;
      this.falg = true;
    }),
      ((error) => {

      });
  }
  removeImage(item) {
    const res = item.split("/")[4];
    console.log(res);
    this.imageuploadService.deleteImage(res).subscribe((data) => {
      this.getAllImages();
    }),
      ((error) => {

      });
  }
  /* fileSelect(evt) {
    debugger
    let arr = [];
    // evt.queue.forEach(element => {
    for (let i = 0; i <= evt.queue.length; i++) {
      let element = evt.queue[i];
      if (element) {

        if (element.file.name.split('.')[1] == 'jpg' || element.file.name.split('.')[1] == 'png' || element.file.name.split('.')[1] == 'jpeg') {

        } else {
          arr.push(false);
        }
        if (i == evt.queue.length - 1) {
          if (arr.length == 0) {
            return false;
          } else {
            return true;
          }
        }
      }
    };
  } */
}
