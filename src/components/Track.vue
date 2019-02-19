<template>
  <div class="col-lg-4 col-md-6">
    <div class="track-card">
      <p class="label">Song Name</p>
      <h6 class="mb-4">{{ track.track_name }}</h6>
      <p class="label">Artist Name</p>
      <p>{{ track.artist_name }}</p>
      <p class="label">Album</p>
      <p>{{ track.album_name }}</p>
      <router-link :to="`lyrics/track/${track.track_id}`" class="button">
        View Lyrics
        <i class="fas fa-arrow-right" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["track"]
};
</script>

<style lang="scss" scoped>
.track-card {
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 2rem 2rem 1.5rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  max-width: 400px;
  height: calc(100% - 1.5rem);

  p.label {
    font-size: 0.75rem;
    color: #17a2b8;
    margin: 0;
  }

  .button {
    text-decoration: none;
    background: #17a2b8;
    color: #fff;
    padding: 0.5rem 0 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.75rem;
    transition: all 0.3s ease;

    i {
      margin-left: 0.5rem;
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      padding-right: 1rem;

      i {
        opacity: 1;
      }
    }
  }
}
</style>
