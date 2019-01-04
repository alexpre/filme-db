// AddMovie.vue

<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Movie</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addMovie">
                    <div class="form-group">
                        <label>Movie Name:</label>
                        <input type="text" class="form-control" v-model="newMovie.name"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Year:</label>
                        <input type="text" class="form-control" v-model="newMovie.year"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Genre:</label>
                        <input type="text" class="form-control" v-model="newMovie.genre"/>
                    </div>
                    <div class="form-group">
                        <label>Movie Director:</label>
                        <input type="text" class="form-control" v-model="newMovie.director"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Movie"/>
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
      name: 'AddMovie'
  },
  firebase: {
    movies: db.ref('movies')
  },
  data () {
    return {
      newMovie: {
          name: '',
          year: '',
                  genre: '',
          director: ''
      }
    }
  },
  methods: {
      addMovie() {
        this.$firebaseRefs.movies.push({
            name: this.newMovie.name,
            year: this.newMovie.year,
            genre: this.newMovie.genre,
            director: this.newMovie.director
        })
        this.newMovie.name = '';
        this.newMovie.year = '';
                this.newMovie.genre = '';
        this.newMovie.director = '';
        this.$router.push('/index')
      }
    }
}
</script>