import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ClientDetailComponent } from './components/clients/client-detail/client-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './components/transactions/edit-transaction/edit-transaction.component';
import { RemoveTransactionComponent } from './components/transactions/remove-transaction/remove-transaction.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    ClientDetailComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    NotFoundComponent,
    EditClientComponent,
    TransactionsComponent,
    AddTransactionComponent,
    EditTransactionComponent,
    RemoveTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
