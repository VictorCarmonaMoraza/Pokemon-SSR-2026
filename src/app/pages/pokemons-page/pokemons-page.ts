import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonList],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
})
export default class PokemonsPage implements OnInit {

  //Otra forma de cambiar el nombre de la pestaña
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const title = this.route.snapshot.routeConfig?.title;
  }
}
