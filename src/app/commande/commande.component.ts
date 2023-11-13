/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeComponent  {
  private apiUrl = 'http://sae301/api/index_commande';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les commandes du client en fonction de l'ID du client
  getCommandesDuClient(userID: string): Observable<Commande[]> {
    const url = `${this.apiUrl}/commande?id_utilisateur=${userID}`;
    return this.http.get<Commande[]>(url);
  }
}
*/