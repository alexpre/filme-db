<template>
  <div class="container">
  <br>
        <div class="card">
        
            <div class="card-header">
            
                <h3>Edit Movie</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateMovie">
                    <div class="form-group">
                        <label>Movie Name:</label>
                        <input type="text" class="form-control" id='movieName' v-model="newMovie.name"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Year:</label>
                        <input type="text" class="form-control" id='movieYear' v-model="newMovie.year"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Genre:</label>
                        <input type="text" class="form-control" id='movieGenre' v-model="newMovie.genre"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Director:</label>
                        <input type="text" class="form-control" id='movieDirector' v-model="newMovie.director"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Movie"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from '../config/db';
import axios from 'axios';

export default {
  components: {
      name: 'EditMovie'
  },
  firebase: {
    movies: db.ref('movies'),
    moviesObj: {
      source: db.ref('movies'),
      asObject: true
    }
  },
  data () {
    return {
      newMovie: {}
    }
  },
  created () {
     let movie = this.moviesObj[this.$route.params.id]
     this.newMovie = {
       name: movie.name,
       year: movie.year,
       genre: movie.genre,
       director: movie.director, 
     }
  },
  methods: {
    updateMovie() {
    var resp = ''
      axios.get('http://192.168.100.3:3000/api/update/' + this.$route.params.id,{
        name: document.getElementById('movieName').value,
        year: document.getElementById('movieYear').value,
        genre: document.getElementById('movieGenre').value,
        director: document.getElementById('movieDirector').value,
      }) 
      .then(function (response) {
        console.log(response)
        resp = response
  })
  if (resp='1') {
            this.$router.push('/list')
        }
    }
  }
}
</script>


