import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from './app/app';
import {RecordListItemComponent} from './app/record-list-item/record-list-item.component';
import {RecordListComponent} from './app/record-list/record-list.component';
import {ModifyRecordComponent} from './app/modify-record/modify-record.component';


const routes: Routes = [
  {path: '', redirectTo: '/records', pathMatch: 'full'},
  {path: 'records', component: RecordListComponent},


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

