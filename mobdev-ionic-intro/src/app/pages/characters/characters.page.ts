import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: any;
  isFavourite = false;
  charactersId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

  ngOnInit() {

    this.charactersId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getCharacters(this.charactersId).subscribe(res => {
      this.characters = res;
    });
    	
    this.favouriteService.isFavourite(this.charactersId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
  favouriteCharacters() {
    this.favouriteService.favouriteCharacters(this.charactersId).then(() => {
      this.isFavourite = true;
    });
  }
  unfavouriteCharacters() {
    this.favouriteService.unfavouriteCharacters(this.charactersId).then(() => {
      this.isFavourite = false;
    });
  }
}
