import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CountDownComponent } from './components/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoComponent,
    NewTodoComponent,
    TodoContainerComponent,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
