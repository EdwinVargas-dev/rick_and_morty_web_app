import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/services/resources.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss','../../../../styles.scss']
})
export class EpisodesComponent implements OnInit {

  episodeUrl: string = 'https://rickandmortyapi.com/api/episode'
  episodesList: any = []
  paginatorOptions: any = {}

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.getEpisodes(this.episodeUrl)
  }

  getEpisodes(url: string) {
    this.resourcesService.getResourceByUrl(url).subscribe(
      (data: any) => {
        this.episodesList = data.response.results;
        this.paginatorOptions = data.response.info
        this.paginatorOptions.pageSize = this.episodesList.length
      },
      error => { console.log(error) },
    )
  }

  selectPage(event: any) {
    if (event.pageIndex > event.previousPageIndex) {
      this.getEpisodes(this.paginatorOptions.next)
    }
    if (event.pageIndex < event.previousPageIndex) {
      this.getEpisodes(this.paginatorOptions.prev)
    }
    window.scroll({ top: 0, behavior: 'smooth' });
  }

}
