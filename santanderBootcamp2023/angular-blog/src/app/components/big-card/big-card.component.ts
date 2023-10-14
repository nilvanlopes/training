import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  coverPhoto: string = ""
  @Input()
  title: string = ""
  @Input()
  description: string = ""
  @Input()
  author: string = ""
  @Input()
  date: string = ""

}
