import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './join/welcome/welcome.component';
import { ContactsComponent } from './join/contacts/contacts.component';
import { SummaryComponent } from './join/summary/summary.component';
import { BoardComponent } from './join/board/board.component';
import { AddTaskComponent } from './join/add-task/add-task.component';
import { LegalNoticeComponent } from './join/legal-notice/legal-notice.component';
import { InfoComponent } from './join/info/info.component';
import { EditContactCardComponent } from './join/contacts/edit-contact-card/edit-contact-card.component';
import { ContactComponent } from './join/contacts/contact/contact.component';
import { AddContactCardComponent } from './join/contacts/add-contact-card/add-contact-card.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'board', component: BoardComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addContact', component: AddContactCardComponent },
  { path: 'editContact', component: EditContactCardComponent },
  { path: 'legalNotice', component: LegalNoticeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'help', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
