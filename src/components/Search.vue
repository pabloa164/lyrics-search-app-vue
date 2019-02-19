<template>
  <div>
    <div v-if="searching">
      <h2 class="text-center">Searching...</h2>
      <Spinner class="mb-4" />
    </div>

    <div v-else>
      <h2 class="text-secondary text-center mb-2">Search for Lyrics</h2>
      <form class="mb-4" @submit.prevent="onFormSubmit(trackTitle)">
        <input
          type="text"
          name="trackTitle"
          placeholder="Search for a Song..."
          v-model="trackTitle"
          autocomplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Spinner from "./Spinner";
export default {
  components: { Spinner },
  data() {
    return {
      trackTitle: "",
      searching: false
    };
  },
  methods: {
    ...mapActions(["searchTrack", "setHeading"]),
    async onFormSubmit(payload) {
      this.searching = true;
      await this.searchTrack(payload);
      this.setHeading(this.trackTitle);
      this.trackTitle = "";
      this.searching = false;
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  max-width: 60%;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 0.75rem 1.5rem;
    border-color: transparent;
    border-radius: 50px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    margin-right: 2rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      transform: scaleX(1.05);
    }
  }

  button {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 50px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    background: #17a2b8;
    color: #fff;
    transition: all 0.4s ease;

    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(3px);
    }
  }
}
</style>
