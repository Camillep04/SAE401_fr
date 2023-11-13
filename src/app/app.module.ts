import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderAccueilComponent } from './header-accueil/header-accueil.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SanglanteComponent } from './sanglante/sanglante.component';
import { PropreComponent } from './propre/propre.component';
import { MaladieComponent } from './maladie/maladie.component';
import { AutresComponent } from './autres/autres.component';
import { ExtraComponent } from './extra/extra.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { CgvComponent } from './cgv/cgv.component';
import { PanierComponent } from './panier/panier.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
//import { CommandeComponent } from './commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAccueilComponent,
    BarNavComponent,
    FooterComponent,
    SanglanteComponent,
    PropreComponent,
    MaladieComponent,
    AutresComponent,
    ExtraComponent,
    BackofficeComponent,
    CgvComponent,
    PanierComponent,
    HeaderAccueilComponent,
    ConnexionComponent,
    ClientComponent,
    //CommandeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',component:HeaderAccueilComponent},
      {path:'sanglante',component:SanglanteComponent},
      {path:'propres',component:PropreComponent},
      {path:'maladies',component:MaladieComponent},
      {path:'autres',component:AutresComponent},
      {path:'extras',component:ExtraComponent},
      {path:'backoffice',component:BackofficeComponent},
      {path:'CGVs',component:CgvComponent},
      {path:'paniers',component:PanierComponent},
      {path:'Main',component:HeaderAccueilComponent},
      {path:'connexion',component:ConnexionComponent},
      {path:'client',component:ClientComponent},
      //{path:'commande',component:CommandeComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
