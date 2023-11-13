import { HttpClient } from '@angular/common/http';
import { Component, Input, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.scss']
})
@Injectable()
export class AutresComponent {
  autres: any[]=[];
  selectedItem: any;
  
  constructor(private HttpClient: HttpClient) {
  }

  ngOnInit() {
    this.HttpClient.get<any[]>('http://sae301/api/articles_categorie/autres').subscribe(//HttpClient retourne un observable 
      (reponse) => {
        console.log(reponse);
        this.autres = reponse;
    },
      (error) => {
        console.error('Erreur de la récupération des données : ' + error);
      });
    }
    openModal(elt: any) {
      this.selectedItem = elt;
    }
}
