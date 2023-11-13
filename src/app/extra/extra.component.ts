import { HttpClient } from '@angular/common/http';
import { Component, Input, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
@Injectable()
export class ExtraComponent {
  extra: any[]=[];
  selectedItem: any;

  constructor(private HttpClient: HttpClient) {
  }

  ngOnInit() {
    this.HttpClient.get<any[]>('http://sae301/angular/extras').subscribe(//HttpClient retourne un observable 
      (reponse) => {
        console.log(reponse);
        this.extra = reponse;
    },
      (error) => {
        console.error('Erreur de la récupération des données : ' + error);
      });
    }
    openModal(elt: any) {
      this.selectedItem = elt;
    }
}