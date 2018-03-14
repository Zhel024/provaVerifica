import { Component, OnInit } from '@angular/core';
import { ServizioDatiService } from '../services/servizio-dati.service';
import { Dati } from '../models/dati';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  id: number;
  boolean: boolean;
  arrayString: string[];
  dati: Dati[];
  constructor(private servizioDati: ServizioDatiService) {
    this.name = 'This is a string';
    this.id = 24;
    this.boolean = false;
    this.arrayString = ['This', 'is', 'an', 'array', 'of', 'string'];
    /* this.dati = [{id: 5, name: 'jozelle', boolean: true}]; */
  }

  ngOnInit() {
  }

  changeBoolean(boolean: boolean) {
    return this.boolean = boolean;
  }

  visualizza() {
    this.servizioDati.estraiDati().subscribe(dati => this.dati = dati);
  }

  aggiungi() {
   this.dati = this.servizioDati.aggiungiDati(this.dati, this.id, this.name, this.boolean);
    return this.dati;
    }

}
