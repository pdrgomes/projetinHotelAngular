import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuartoComponent } from './components/quarto/quarto.component';
import { routes } from './app.routes';
import { MenuComponent } from './components/menu/menu.component';
import { HospedeComponent } from './components/hospede/hospede.component';
import { ServicoComponent } from './components/servico/servico.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; //LISTA
import {MatSortModule} from '@angular/material/sort'; // TABELA 
import {MatSnackBarModule} from '@angular/material/snack-bar';  //

@NgModule({
  declarations: [
    AppComponent,
    QuartoComponent,
    ServicoComponent,
    MenuComponent,
    HospedeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
