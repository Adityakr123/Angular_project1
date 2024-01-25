import { Component} from '@angular/core';
import { DomSanitizer , SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  imageUrl: string | null = null;
  selectedFile: File | null = null;
  storedImageUrl: string | null = null;


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.readImage(file);
    }
  }

  readImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  saveImage() {
    if (this.imageUrl && this.selectedFile) {
      localStorage.setItem('uploadedImage', this.imageUrl);
      console.log('Image saved to local storage.');
    } else {
      console.log('No image selected.');
    }
  }
  storedImageUrl1: SafeResourceUrl | null = null;
  showImage: boolean = false;
  constructor(private sanitizer: DomSanitizer) {}

  viewImage() {
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      this.storedImageUrl1 = this.sanitizer.bypassSecurityTrustUrl(storedImage);
    }
    console.log(this.storedImageUrl1);
    this.showImage = true;
    console.log(this.showImage);
  }
}
