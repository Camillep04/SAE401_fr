import { HttpClient } from '@angular/common/http';
import { Component, Input, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-accueil',
  templateUrl: './header-accueil.component.html',
  styleUrls: ['./header-accueil.component.scss']
})
@Injectable()
export class HeaderAccueilComponent {
  meilleuresVentes: any[];

  
  constructor(private HttpClient: HttpClient) {
    this.meilleuresVentes = [];
  }

  ngOnInit() {
  this.HttpClient.get<any[]>('http://sae301/angular').subscribe(//HttpClient retourne un observable 
  (reponse) => {
    console.log(reponse);
    this.meilleuresVentes = reponse;
  },
  (error) => {
    console.log('Erreur de la récupération des données : ' + error);
  });
  }
}