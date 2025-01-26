import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  img: string = ''
  @Input()
  name: string = ''
  fullImgURL: string = ''
  ngOnInit() {
    this.fullImgURL = environment.images.concat(this.img);
  }
}
