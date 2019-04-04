import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuartoComponent } from './components/quarto/quarto.component';
import { ServicoComponent } from './components/servico/servico.component';
import { HospedeComponent } from './components/hospede/hospede.component';
import { MenuComponent } from './components/menu/menu.component';

export const ROUTES: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'quarto',
        component: QuartoComponent
    },
    {
        path: 'quarto/:id',
        component: QuartoComponent
    },
    {
        path: 'hospede',
        component: HospedeComponent
    },
    {
        path: 'hospede/:id',
        component: HospedeComponent
    },
    {
        path: 'servico',
        component: ServicoComponent
    },
    {
        path: 'servico/:id',
        component: ServicoComponent
    },
    {
        path: '',
        component: HospedeComponent
    }
  
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
