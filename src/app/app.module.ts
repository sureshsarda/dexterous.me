import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatTreeModule } from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './module/dash/dash.component';

@NgModule({
    declarations: [
        AppComponent,
        DashComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatTreeModule,
        CdkTreeModule
    ],
    exports: [
        MatCardModule, MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
