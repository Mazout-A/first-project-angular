import { Component, signal } from '@angular/core';
import { CollectionItemCard } from './compenents/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';
import { SearchBar } from './compenents/search-bar/search-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CollectionItemCard, SearchBar],
})
export class App {
  searchText = '';

  count = 0;

  vegeta!: CollectionItem;
  goku!: CollectionItem;
  vegeto!: CollectionItem;
  gogeta!: CollectionItem;
  naruto!: CollectionItem;

  constructor() {
    this.vegeta = new CollectionItem();
    this.vegeta.name = 'Vegeta';
    this.vegeta.description = 'The prince of super syajin';
    this.vegeta.rarity = 'Epic';
    this.vegeta.price = '179 €';
    this.vegeta.image = 'img/vegeta.webp';

    this.goku = new CollectionItem();
    this.goku.name = 'Goku';
    this.goku.description = 'The legendary super sayjin';
    this.goku.rarity = 'Legendary';
    this.goku.price = '199 €';
    this.goku.image = 'img/goku.webp';

    this.vegeto = new CollectionItem();
    this.vegeto.name = 'Vegeto';
    this.vegeto.description = 'La fusion potalas';
    this.vegeto.rarity = 'Legendary';
    this.vegeto.price = '219 €';
    this.vegeto.image = 'img/vegeto.webp';

    this.gogeta = new CollectionItem();
    this.gogeta.name = 'gogeta';
    this.gogeta.description = 'la fusion metamole';
    this.gogeta.rarity = 'Legendary';
    this.gogeta.price = '229 €';
    this.gogeta.image = 'img/gogeta.webp';

    this.naruto = new CollectionItem();
    this.naruto.name = 'naruto';
    this.naruto.description = 'Le ninja qui souahite devenir hokage';
    this.naruto.rarity = 'Commun';
    this.naruto.price = '99 €';
    this.naruto.image = 'img/naruto.webp';
  }

  increamentCount() {
    this.count++;
  }
}
