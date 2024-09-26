<template>
  <div class="about">
    <h1>This is an Edit page</h1>

    <form action="" @submit.prevent="update">
      <div class="row my-5">
        <div class="col-6 mx-auto">
          <div class="form-group mb-4">
            <input
              v-model="userDetail.username"
              type="text"
              class="form-control"
              placeholder="username"
            />
          </div>
          <div class="form-group mb-4">
            <input
              v-model="userDetail.first_name"
              type="text"
              class="form-control"
              placeholder="fist_name"
            />
          </div>
          <div class="form-group mb-4">
            <input
              v-model="userDetail.last_name"
              type="text"
              class="form-control"
              placeholder="last_name"
            />
          </div>
          <div class="form-group mb-4">
            <select v-model="userDetail.gender" class="form-control">
              <option
                v-for="genders in listGender"
                :key="genders"
                :value="genders"
              >
                {{ genders }}
              </option>
            </select>
          </div>
          <div class="form-group mb-4">
            <input
              v-model="userDetail.password"
              type="text"
              class="form-control"
              placeholder="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetail: {
        userDetail: {
          username: "",
          first_name: "",
          last_name: "",
          gender: "Male",
          password: "",
          status: 1,
        },
      },
      listGender: ["Female", "Male"],
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
    getUserById() {
      this.$axios.get(`/api/user/${this.$route.params.id}`).then((res) => {
        this.userDetail = res.data;
      });
    },

    update() {
      this.$axios
        .put(`/api/edit-user/${this.$route.params.id}`, this.userDetail)
        .then(() => {
          window.alert(`Update  success`);
          this.$router.push(`/`);
        })
        .catch((err) => {
          window.alert(err);
        });
    },
  },
};
</script>
