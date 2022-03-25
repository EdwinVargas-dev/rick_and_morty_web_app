import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../../shared/services/resources.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss', '../../../../styles.scss'],
})
export class CharactersComponent implements OnInit {

  characterUrl: string = 'https://rickandmortyapi.com/api/character'
  charactersList: any = []
  paginatorOptions: any = {}

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.getCharacterAndDetailEpisode(this.characterUrl)
  }

  getCharacterAndDetailEpisode(url: string) {
    this.resourcesService.getResourceByUrl(url).subscribe(
      (data: any) => {
        this.charactersList = data.response.results;
        this.paginatorOptions = data.response.info
        this.paginatorOptions.pageSize = data.response.results.length
      },
      error => { console.log(error) },
      () => {
        this.charactersList.forEach((element: any) => {
          this.resourcesService.getResourceByUrl(element.episode[0]).subscribe(
            (data: any) => { element.firstEpisode = data.response; },
            error => { element.firstEpisode = '' }
          )
        });
      }
    )
  }

  selectPage(event: any) {
    if (event.pageIndex > event.previousPageIndex) {
      this.getCharacterAndDetailEpisode(this.paginatorOptions.next)
    }
    if (event.pageIndex < event.previousPageIndex) {
      this.getCharacterAndDetailEpisode(this.paginatorOptions.prev)
    }
    window.scroll({ top: 0, behavior: 'smooth' });
  }

}
