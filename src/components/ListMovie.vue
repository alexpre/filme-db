// ListMovie.vue

<template>
  <div>
    <h1>List Movie</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>Movie Year</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="movie of movies" :key="movie['.key']">
            <td>{{ movie.name }}</td>
            <td>{{ movie.year }}</td>
            <td>
                <router-link :to="{ name: 'Edit', params: {id: movie['.key']} }" class="btn btn-warning">
                  Edit
                </router-link>
            </td>
            <td>
              <button @click="deleteMovie(movie['.key'])" class="btn btn-danger">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { db } from '../config/db';

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
    movies: db.ref('movies')
  },
  methods: {
    deleteMovie(key) {
      this.$firebaseRefs.movies.child(key).remove();
    }
  }
}
</script>
