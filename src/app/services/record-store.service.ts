import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Record} from "../Shared/models/record";
import {recordList} from "../data/mock-records";

@Injectable({
  providedIn: 'root'
})
export class RecordStoreService {
  private records: Record[] = recordList;
  constructor() {}
    getRecords(): Observable<Record[]> {
      return of(recordList);
  }

  getRecordById(id: number): Observable<Record | undefined> {
    const record = this.records.find(r => r.id === id);
    return of(record);
  }

  addRecord(newRecord: Record): Observable<Record[]> {
    this.records.push(newRecord);
    return of(this.records);
  }

  updateRecord(updatedRecord: Record): Observable<Record[]> {
    const index = this.records.findIndex(r => r.id === updatedRecord.id);
    if (index !== -1) {
      this.records[index] = updatedRecord;
    }
    return of(this.records);
  }

  deleteContent(id: number): Observable<Record[]> {
    this.records = this.records.filter(r => r.id !== id);
    return of(this.records);
  }
}
