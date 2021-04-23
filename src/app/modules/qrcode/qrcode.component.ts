import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {


  public imageSource : any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    console.log(this.data)
    this.imageSource=this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+this.data.qrcode);
  }

}
