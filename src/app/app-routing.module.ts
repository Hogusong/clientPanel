import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './components/transactions/edit-transaction/edit-transaction.component';
import { RemoveTransactionComponent } from './components/transactions/remove-transaction/remove-transaction.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'clinents/:id', component: ClientDetailComponent },
  { path: 'clinents/add', component: AddClientComponent },
  { path: 'clinents/:id/edit', component: EditClientComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transactions/add', component: AddTransactionComponent },
  { path: 'transactions/edit/:id', component: EditTransactionComponent },
  { path: 'transactions/remove/:id', component: RemoveTransactionComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
