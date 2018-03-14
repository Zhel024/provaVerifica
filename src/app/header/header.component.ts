import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServizioDatiService } from '../services/servizio-dati.service';
import { Dati } from '../models/dati';
import { MessagesService } from '../services/messages.service';


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
  counter: number;
  @Output() open: EventEmitter<Dati> = new EventEmitter();
  constructor(private servizioDati: ServizioDatiService,
              private servizioMessaggi: MessagesService) {
    this.name = 'This is a string';
    this.id = 24;
    this.boolean = false;
    this.arrayString = ['This', 'is', 'an', 'array', 'of', 'string'];
  }

  ngOnInit() {
  }

  changeBoolean(boolean: boolean) {
    this.servizioMessaggi.addMessaggi('Toggle button clicked!');
    return this.boolean = boolean;
  }

  visualizza() {
    this.servizioDati.estraiDati().subscribe(dati => this.dati = dati);
    this.servizioMessaggi.addMessaggi('Visualizza button clicked!');
  }

  aggiungi() {
    this.dati = this.servizioDati.aggiungiDati(this.dati, this.id, this.name, this.boolean);
    this.servizioMessaggi.addMessaggi('Added dati into the array');
    return this.dati;
  }

  visualizzaNelBody(dataSelezionata: Dati) {
    this.servizioMessaggi.addMessaggi('Show body button clicked');
    this.open.emit(dataSelezionata);
  }
}
