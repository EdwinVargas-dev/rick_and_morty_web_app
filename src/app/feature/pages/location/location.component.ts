import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/shared/services/resources.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss', '../../../../styles.scss']
})
export class LocationComponent implements OnInit {
  private locationUrl: string = 'https://rickandmortyapi.com/api/location/'
  currentLocation: any = {}

  constructor(private router: Router, private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.getCurrentLocation(this.locationUrl+this.router.url.split('code=')[1])
  }

  getCurrentLocation(url: string) {
    this.resourcesService.getResourceByUrl(url).subscribe(
      (data: any) => {
        this.currentLocation = data.response;
      },
      error => { console.log(error) },
    )
  }

}
