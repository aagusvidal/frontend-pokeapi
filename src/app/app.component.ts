import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon-services';
import { Pokemon } from './entidades/pokemon.class';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-pokeapi';
  pokemonList: Pokemon[] = [];
  informacionAdicional : Pokemon | undefined ;

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit() {
  }

  getPokemons() {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        this.pokemonList = pokemons;
      });
  }

  openDetailsModal(id: string, name: string) {
    this.pokemonService.getInformacionAdicionalPokemon(id, name)
      .subscribe(informacion => {
        this.informacionAdicional = <Pokemon>informacion;
      });
  }
}
