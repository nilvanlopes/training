import { Series } from 'src/app/models/series';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  series?: Series
  serie: any
  constructor(private service: TmdbService) {

  }
  ngOnInit(): void {
    this.service.getFavoriteList().subscribe(
      {
        next: res => {
          this.series = res
          this.serie = this.series.results
          console.log(this.serie);
        },
        error: err => console.log(err)
      }
    )


  }

}
