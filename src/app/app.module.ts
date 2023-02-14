import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { PostComponent } from './pages/frontend/post/post.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { ReportComponent } from './pages/backend/report/report.component';
import { UserComponent } from './pages/backend/user/user.component';
import { SettingComponent } from './pages/backend/setting/setting.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { HeaderComponent } from './shared/frontend/header/header.component';
import { FooterComponent } from './shared/frontend/footer/footer.component';
import { SidebarComponent } from './shared/backend/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/frontend/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontLayoutComponent,
    BackendLayoutComponent,
    AboutComponent,
    PostComponent,
    DashboardComponent,
    StockComponent,
    ReportComponent,
    UserComponent,
    SettingComponent,
    LoginRegisterComponent,
    FooterComponent,
    SidebarComponent,
    LoginRegisterLayoutComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
