import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pokemon } from '../entidades/pokemon.class';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('http://13.59.96.120/api/pokemons')
      .pipe(
        map(response => response.map(pokemonData => new Pokemon(
          pokemonData.idPokemon,
          pokemonData.name,
          pokemonData.abilities,
          pokemonData.types,
          pokemonData.weight,
          pokemonData.image,
          pokemonData.moves,
          pokemonData.description,
          pokemonData.height
        )))
      );
  }

    getInformacionAdicionalPokemon(id: string, name: string): Observable<Pokemon> {
      const url = `http://13.59.96.120/api/pokemon/info/${id}/${name}`;
  
      return this.http.get<Pokemon>(url)
        .pipe(
          map(pokemonData => new Pokemon(
            pokemonData.idPokemon,
            pokemonData.name,
            pokemonData.abilities,
            pokemonData.types,
            pokemonData.weight,
            pokemonData.image,
            pokemonData.moves,
            pokemonData.description,
            pokemonData.height
          )));
} 
}