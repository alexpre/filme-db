<template>
  <div class='container'>
        <div class="card">
            <div class="card-header">
                <h3>Add Movie</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addMovie">
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
                        <select id='movieDirector' v-model='directors'>
                            <option disabled value=''>Please select one</option>
                            <option v-for="director in directors" :key="director['.key']">
                                {{director.name}}
                            </option>
                            <option>Random</option>
                        </select>
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
import axios from 'axios'

export default {
  components: {
      name: 'AddMovie'
  },
  data () {
    return {
      newMovie: {
          name: '',
          year: '',
          genre: '',
          director: ''
      },
      directors: []
    }
  },
  firebase: {
    movies: db.ref('movies'),
    directors: db.ref('director')
  },
  methods: {
      addMovie(){
      axios.post('http://192.168.1.5:3000/api/add',{
        name: document.getElementById('movieName').value,
        year: document.getElementById('movieYear').value,
        genre: document.getElementById('movieGenre').value,
        director:document.getElementById('movieDirector').value,
        //directorKey: director.key
      })
      .then(function (response) {
        console.log(response)
  })
        this.newMovie.name = '';
        this.newMovie.year = '';
        this.newMovie.genre = '';
        this.newMovie.director = '';
        this.$router.push('/index')
      },
    }
}
</script>

<style>
</style>