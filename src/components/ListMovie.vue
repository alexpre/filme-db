// ListMovie.vue

<template>
  <div>
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
          <tr v-for="movie of movies" :key="movie['.key']">
            <td>{{ movie.name }}</td>
            <td>{{ movie.year }}</td>
                        <td>{{ movie.genre }}</td>
            <td>{{ movie.director }}</td>
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
