import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(message: string) {
    console.log("🚀 ~ LoggingService ~ log ~ message:", message)
    const timestamp = new Date().toLocaleDateString();
    console.log("🚀 ~ LoggingService ~ log ~ timestamp:", timestamp)

  }
}
