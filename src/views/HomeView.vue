<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 text-left">
        <div class="row">
          <div class="col-6 mx-auto">
            <form class="form-group" @submit.prevent="getUser">
              <input
                v-model="textSearch"
                type="text"
                class="form-control"
                placeholder="Search..."
              />
              <button type="submit" class="btn btn-primary mt-2">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
          <th>ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lists, index) in listUsers" :key="lists.user_id">
          <td>{{ index + 1 }}</td>

          <td>{{ lists.username }}</td>
          <td>{{ lists.first_name }}</td>
          <td>{{ lists.last_name }}</td>
          <td>{{ lists.gender }}</td>
          <td>{{ lists.user_id }}</td>
          <td>
            <router-link :to="{ name: 'edit', params: { id: lists.user_id } }">
              <button type="button" class="btn btn-warning mx-2">Edit</button>
            </router-link>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteUser(lists.user_id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listUsers: [],
      textSearch: "",
    };
  },

  created() {
    this.getUser(this.search);
  },

  methods: {
    getUser() {
      this.$axios
        .get(`/api/user`, { params: { query: this.textSearch } })
        .then((res) => {
          this.listUsers = res.data;
        })
        .catch((err) => {
          window.alert(err);
        });
    },
    deleteUser(id) {
      console.log(id);
      this.$axios
        .delete(`/api/delete-user/${id}`)
        .then(() => {
          window.alert(`Delete success`);
          this.getUser();
        })
        .catch((err) => {
          window.alert(err);
        });
    },
  },
};
</script>
