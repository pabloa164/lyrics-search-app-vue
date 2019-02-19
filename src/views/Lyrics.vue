<template>
  <div class="container">
    <router-link to="/" class="button-go-back">Go Back</router-link>

    <div class="mt-4" v-if="!loading">
      <h1 class="mb-2">
        Lyrics for "{{ track.track_name }}" by {{ track.artist_name }}
      </h1>
      <p>{{ lyrics }}</p>
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import { specificTrack, trackDetail } from "../backendEP";
import Spinner from "../components/Spinner";
export default {
  components: { Spinner },
  data() {
    return {
      trackId: this.$route.params.id,
      lyrics: "",
      track: {},
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    const lyricsResponse = await fetch(
      specificTrack.replace("$id", this.trackId)
    );
    const lyricsJson = await lyricsResponse.json();
    this.lyrics = lyricsJson.message.body.lyrics.lyrics_body;

    const trackResponse = await fetch(trackDetail.replace("$id", this.trackId));
    const trackJson = await trackResponse.json();
    this.track = trackJson.message.body.track;
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
.button-go-back {
  text-decoration: none;
  padding: 0.75rem 1.75rem;
  background: #17a2b8;
  color: #fff;
  border-radius: 50px;

  &:active,
  &:visited {
    outline: none;
  }

  &:hover {
    color: #fff;
    text-decoration: none;
  }
}

.container {
  margin-top: 2.5rem;
}
</style>
