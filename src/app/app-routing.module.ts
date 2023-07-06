import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './join/welcome/welcome.component';
import { ContactsComponent } from './join/contacts/contacts.component';
import { SummaryComponent } from './join/summary/summary.component';
import { BoardComponent } from './join/board/board.component';
import { AddTaskComponent } from './join/tasks/add-task/add-task.component';
import { LegalNoticeComponent } from './join/legal-notice/legal-notice.component';
import { InfoComponent } from './join/info/info.component';
import { EditContactCardComponent } from './join/contacts/edit-contact-card/edit-contact-card.component';
import { ContactComponent } from './join/contacts/contact/contact.component';
import { AddContactCardComponent } from './join/contacts/add-contact-card/add-contact-card.component';
import { TaskComponent } from './join/tasks/task/task.component';
import { EditTaskComponent } from './join/tasks/edit-task/edit-task.component';
import { LoginComponent } from './auth/login/login.component';
import { JoinComponent } from './join/join.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PwForgotComponent } from './auth/pw-forgot/pw-forgot.component';
import { PwResetComponent } from './auth/pw-reset/pw-reset.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pwForgot', component: PwForgotComponent },
  { path: 'pwReset', component: PwResetComponent },

  // CHILD ROUTER
  {
    path: 'join',
    component: JoinComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'board', component: BoardComponent },
      { path: 'addTask', component: AddTaskComponent },
      { path: 'task', component: TaskComponent },
      { path: 'editTask', component: EditTaskComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'addContact', component: AddContactCardComponent },
      { path: 'editContact', component: EditContactCardComponent },
      { path: 'legalNotice', component: LegalNoticeComponent },
      { path: 'info', component: InfoComponent },
      { path: 'help', component: InfoComponent },
    ],
  },
  // FALLBACK
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect to login
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
