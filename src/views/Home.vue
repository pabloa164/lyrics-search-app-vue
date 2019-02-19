<template>
  <div class="container">
    <Search />
    <TrackList />
  </div>
</template>

<script>
import TrackList from "@/components/TrackList";
import Search from "@/components/Search";
export default {
  name: "home",
  components: { TrackList, Search }
};
</script>
