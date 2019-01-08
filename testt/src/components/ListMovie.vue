<template>
  <div>
   <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Director</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="movie in movies" :key="movie['.key']">
            <td>something</td>
            <td>{{ movie.name }}</td>
            <td>{{ movie.year }}</td>
            <td>{{ movie.genre }}</td>
            <td>{{ movie.director }}</td>
            <td>
              <router-link :to="{ name: 'EditMovie', params: {id: movie['.key']} }" class="btn btn-warning">
                  Edit
                </router-link>
            </td>
            <td>
              <button @click="deleteMovie" class="btn btn-danger">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '../config/db';
import axios from 'axios';

export default {
  components: {
      name: 'ListMovie'
  },
  data() {
    return {
      movies: []
    }
  },
  firebase: {
    movies: db.ref('/movies')
  },
  methods: {
    deleteMovie() {
      axios.delete('http://192.168.0.3:3000/api/delete', {
        mkey: '-LVPPyDCNKAUlbnVQ9So'
      })
    }
  }
}
</script>

<style>
</style>
