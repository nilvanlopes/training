import { Component } from '@angular/core';
import { BigCardComponent } from '../big-card/big-card.component';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent extends BigCardComponent {

}
