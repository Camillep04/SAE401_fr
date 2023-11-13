import { HttpClient } from '@angular/common/http';
import { Component, Input, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanglante',
  templateUrl: './sanglante.component.html',
  styleUrls: ['./sanglante.component.scss']
})
@Injectable()
export class SanglanteComponent {
  sanglantes: any[] = [];
  categorie: any[] = [];
  selectedItem: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<any[]>('http://sae301/api/articles_categorie/Sanglante').subscribe(
      (reponse) => {
        console.log(reponse);
        this.sanglantes = reponse;
      },
      (error) => {
        console.error('Erreur de la récupération des données : ' + error);
      }
    );
  }

  openModal(elt: any) {
    this.selectedItem = elt;
  }
}