import { HttpClient } from '@angular/common/http';
import { Component, Input, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-propre',
  templateUrl: './propre.component.html',
  styleUrls: ['./propre.component.scss']
})
@Injectable()
export class PropreComponent {
  propres: any[]=[];
  selectedItem: any;

  constructor(private HttpClient: HttpClient) {
  }

  ngOnInit() {
    this.HttpClient.get<any[]>('http://sae301/api/articles_categorie/Propre').subscribe(//HttpClient retourne un observable 
      (reponse) => {
        console.log(reponse);
        this.propres = reponse;
    },
      (error) => {
        console.error('Erreur de la récupération des données : ' + error);
      });
    }
    openModal(elt: any) {
      this.selectedItem = elt;
    }
}
