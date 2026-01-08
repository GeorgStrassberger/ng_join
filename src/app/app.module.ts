// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PwForgotComponent } from './auth/pw-forgot/pw-forgot.component';
import { PwResetComponent } from './auth/pw-reset/pw-reset.component';
import { WelcomeComponent } from './join/welcome/welcome.component';
import { HeaderComponent } from './join/header/header.component';
import { NavbarComponent } from './join/navbar/navbar.component';
import { SummaryComponent } from './join/summary/summary.component';
import { BoardComponent } from './join/board/board.component';
import { AddTaskComponent } from './join/tasks/add-task/add-task.component';
import { ContactsComponent } from './join/contacts/contacts.component';
import { LegalNoticeComponent } from './join/legal-notice/legal-notice.component';
import { InfoComponent } from './join/info/info.component';
import { TestboxComponent } from './testbox/testbox.component';
import { TaskComponent } from './join/tasks/task/task.component';
import { AddContactCardComponent } from './join/contacts/add-contact-card/add-contact-card.component';
import { EditContactCardComponent } from './join/contacts/edit-contact-card/edit-contact-card.component';
import { ContactComponent } from './join/contacts/contact/contact.component';
import { ReturnBtnComponent } from './components/return-btn/return-btn.component';
import { ContactLabelComponent } from './join/contacts/contact-label/contact-label.component';
import { ItemComponent } from './testbox/item/item.component';
import { EditTaskComponent } from './join/tasks/edit-task/edit-task.component';
import { TaskLabelComponent } from './join/tasks/task-label/task-label.component';
import { JoinComponent } from './join/join.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PwForgotComponent,
    PwResetComponent,
    WelcomeComponent,
    HeaderComponent,
    NavbarComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    LegalNoticeComponent,
    InfoComponent,
    TaskComponent,
    TestboxComponent,
    AddContactCardComponent,
    EditContactCardComponent,
    ContactComponent,
    ReturnBtnComponent,
    ContactLabelComponent,
    ItemComponent,
    EditTaskComponent,
    TaskLabelComponent,
    JoinComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
