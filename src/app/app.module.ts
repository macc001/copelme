import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexGlobalModule } from './master/utils/global/index.global.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, IndexGlobalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
