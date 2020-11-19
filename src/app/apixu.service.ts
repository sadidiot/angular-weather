import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=69da0bbb5987d2d6f81b075b71ccf1a2&query=' + location
    );
}
}
