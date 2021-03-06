import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  _filtroLista: string = '';

  get filtroLista() : string
  {
    return this._filtroLista;
  }
  set filtroLista(value: string)
  {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista):
    this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any = [];
  imagemLargura: number = 50;
  imagemMargem: number =2;
  mostrarImagem = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getEventos();
  
  }

  alternarImagem()
  {
  this.mostrarImagem = !this.mostrarImagem;
  }

  filtrarEventos(filtrarPor : string) : any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  getEventos()
  {
    this.http.get('https://localhost:44316/api/values').subscribe(
      response => { this.eventos = response;
      }, error => {
        console.log(error);
      }
    );
  }

}
