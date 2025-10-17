import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from './app/app';
import {RecordListItemComponent} from './app/record-list-item/record-list-item.component';
import {RecordListComponent} from './app/record-list/record-list.component';
import {ModifyRecordComponent} from './app/modify-record/modify-record.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/records', pathMatch: 'full'},
  {path: 'records', component: RecordListComponent},
  {path: 'records/:id', component: RecordListItemComponent},
  {path: 'modify-record', component: ModifyRecordComponent},
  {path: '**', component: PageNotFoundComponent}];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

