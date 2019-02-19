<template>
  <div>
    <div v-if="Object.keys(trackList).length !== 0">
      <h2 class="text-center font-weight-bold mb-4 text-secondary">
        {{ heading }}
      </h2>
      <div class="row">
        <Track
          v-for="item in trackList"
          :key="item.track.track_id"
          :track="item.track"
        />
      </div>
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Track from "./Track";
import Spinner from "./Spinner";
export default {
  components: { Track, Spinner },
  computed: {
    ...mapState(["heading", "trackList"])
  }
};
</script>

<style scoped></style>
