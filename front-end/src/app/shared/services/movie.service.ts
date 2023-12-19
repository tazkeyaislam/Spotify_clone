import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sot_by: 'popilarity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2E1YTZkYjA1YjExMzUxMmQzMzNmOTFiYzJmZGVjNSIsInN1YiI6IjY1ODE2NmMwY2VkYWM0MDg0NTdkYzJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EStfkxWc37Zd02W6MgdmxB7-pwRoIHwhvdI06zkhbqA'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http : HttpClient) { }

  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }
}
 