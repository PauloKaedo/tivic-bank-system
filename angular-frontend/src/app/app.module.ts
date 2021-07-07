import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { SucessComponent } from './views/sucess/sucess.component';
import { AccountShowComponent } from './components/template/account-show/account-show.component';
import { BalanceComponent } from './views/balance/balance.component';
import { DepositComponent } from './views/deposit/deposit.component';
import { WithdrawComponent } from './views/withdraw/withdraw.component';
import { AccountComponent } from './views/account/account.component';
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './views/login/login.component';
import { AccountCreateComponent } from './views/account-create/account-create.component';
import { AccountListComponent } from './views/account-list/account-list.component'

import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SucessComponent,
    AccountShowComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawComponent,
    AccountComponent,
    LoginComponent,
    AccountCreateComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
