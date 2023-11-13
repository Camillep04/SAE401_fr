import { HttpClient } from '@angular/common/http';
import { Component, Input, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-maladie',
  templateUrl: './maladie.component.html',
  styleUrls: ['./maladie.component.scss']
})
@Injectable()
export class MaladieComponent {
  maladies: any[]=[];
  selectedItem: any;
  
  constructor(private HttpClient: HttpClient) {
  }

  ngOnInit() {
    this.HttpClient.get<any[]>('http://sae301/api/articles_categorie/maladies').subscribe(//HttpClient retourne un observable 
      (reponse) => {
        console.log(reponse);
        this.maladies = reponse;
    },
      (error) => {
        console.error('Erreur de la récupération des données : ' + error);
      });
    }
    openModal(elt: any) {
      this.selectedItem = elt;
    }
}
