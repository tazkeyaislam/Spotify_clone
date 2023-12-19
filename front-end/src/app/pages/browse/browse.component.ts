import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MovieService } from 'src/app/shared/services/movie.service';
import { IvideoContent } from 'src/app/shared/models/video-content.interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  popularMovies: IvideoContent[] = [];

  constructor( 
    private authService : AuthService,
    private movieService : MovieService
    ) { }

  ngOnInit(): void {
    // this.getAllMovies();
    this.movieService.getMovies().subscribe(res=>{
      console.log(res);
      this.popularMovies = res.results;
    })
  }
  
  signOut(){
    //removing data
    sessionStorage.removeItem("loggedInUser");
    this.authService.signOut();
  }

  

  // getAllMovies(){ 
  //   this.movieService.getMovies().subscribe(res=>{
  //     console.log(res);
  //   })
  // }

}
