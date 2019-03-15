import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DataRowOutlet } from '@angular/cdk/table';
 

@Injectable({
  providedIn: 'root'
})
export class CheckUploadedDataFormatService {

  constructor(private http: HttpClient) { }


  check_uploaded_data_format(file, callback): Observable<void> {
    // 1. use javascript and R to check the format of the dataset.
    // 2. if everything is good, return good.
    var result;

    var req = ocpu.call("check_uploaded_data_format",{
      path:file.files[0]
    },function(session){
      session.getObject(function(obj){
        callback(obj)
      })
      console.log(session.loc)
    })
    return;
  }

  

}
