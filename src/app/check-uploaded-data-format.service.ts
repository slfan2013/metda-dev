import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUploadedDataFormatService {

  constructor() { }


  check_uploaded_data_format(file): void {
    // 1. use javascript and R to check the format of the dataset.
    // 2. if everything is good, return good.
    console.log(file.files[0])



  }

}
