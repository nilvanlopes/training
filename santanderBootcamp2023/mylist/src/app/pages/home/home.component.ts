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

  constructor(private service: TmdbService) {

  }
  ngOnInit(): void {
    this.service.getFavoriteList().subscribe(
      {
        next: res => {
          this.series = res
          for (const key in this.series.results) {
            console.log(this.series.results[key].id);
            console.log(this.series.results[key].name);
            console.log(this.series.results[key].backdrop_path);
          }
        },
        error: err => console.log(err)
      }
    )


  }

}
