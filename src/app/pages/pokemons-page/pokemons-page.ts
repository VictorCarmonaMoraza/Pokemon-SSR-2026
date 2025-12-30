import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';


@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
})
export default class PokemonsPage implements OnInit {

  //Otra forma de cambiar el nombre de la pestaña
  private route = inject(ActivatedRoute);
  // public isLoading = signal(true);

  ngOnInit() {
    const title = this.route.snapshot.routeConfig?.title;
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 1500)
  }

}
