import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
@Injectable()
export class ConnexionComponent implements OnInit {

  user = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  form: any = [];

  constructor(private http: HttpClient, private router: Router) {} 

  ngOnInit() {
    // Vous pouvez effectuer ici votre appel HTTP pour récupérer les données de l'utilisateur
    this.http.get<any>('http://sae301/api/index_utilisateur').subscribe(
      (reponse) => {
        console.log(reponse);
        // Stockez les données de l'utilisateur renvoyées par l'API dans le formulaire
        this.form = reponse.donnees;
        console.log(this.user.value);
      },
      (error) => {
        console.error('Erreur de la récupération des données : ' + error);
      }
    );
  }

  submitUser() {
    console.log(this.user.value);
  
    // Comparez ici les données soumises avec celles récupérées dans ngOnInit
    const loginFromForm = this.user.value.login;
    const passwordFromForm = this.user.value.password;
  
    console.log(this.form);
  
    // Vous pouvez maintenant comparer les données et prendre des mesures en conséquence
    let isAuthenticated = false;
    
    this.form.forEach((element: any) => {
      if (loginFromForm === element.login && passwordFromForm === element.password) {
        // Les données sont identiques, faites quelque chose ici
        console.log('Les données sont identiques');
        
        // Stockez l'ID dans le local storage
        localStorage.setItem('userID', element.id.toString());
        
        isAuthenticated = true;
        this.router.navigate(['/client']);
      }
    });
  
    if (!isAuthenticated) {
      // Les données ne sont pas identiques, faites quelque chose ici
      console.log('Les données ne sont pas identiques');
    }
  }
  
}