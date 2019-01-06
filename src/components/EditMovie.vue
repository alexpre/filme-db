<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Movie</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateMovie">
                    <div class="form-group">
                        <label>Movie Name:</label>
                        <input type="text" class="form-control" v-model="newMovie.name"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Year:</label>
                        <input type="text" class="form-control" v-model="newMovie.year" />
                    </div>
                     <div class="form-group">
                        <label>Movie Genre:</label>
                        <input type="text" class="form-control" v-model="newMovie.genre"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Director:</label>
                        <input type="text" class="form-control" v-model="newMovie.director" />
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
  created() {
     let movie = this.moviesObj[this.$route.params.id]
     this.newMovie = {
       name: movie.name,
       year: movie.year,
       genre: movie.genre,
       director: movie.director
     }
  },
  methods: {
    updateMovie() {
      this.$firebaseRefs.movies.child(this.$route.params.id).set(this.newMovie);
      this.$router.push('/list')
    }
  }
}
</script>