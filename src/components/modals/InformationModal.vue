<template>
  <VueFinalModal name="information" adaptive>
    <ul class="info-list">
      <li>
        <vue-feather type="github" aria-hidden="true" role="img" />
        <a href="https://github.com/owntracks/frontend">owntracks/frontend</a>
        ({{ frontendVersion }})
      </li>
      <li>
        <vue-feather type="github" aria-hidden="true" role="img" />
        <a href="https://github.com/owntracks/recorder">owntracks/recorder</a>
        ({{ recorderVersion || $t("Loading version...") }})
      </li>
      <li>
        <vue-feather type="globe" aria-hidden="true" role="img" />
        <a href="https://owntracks.org">
          {{ $t("OwnTracks website") }}
        </a>
      </li>
      <li>
        <vue-feather type="book" aria-hidden="true" role="img" />
        <a href="https://owntracks.org/booklet/">
          {{ $t("OwnTracks documentation") }}
        </a>
      </li>
      <li>
        <vue-feather type="twitter" aria-hidden="true" role="img" />
        <a href="https://twitter.com/OwnTracks">
          {{ $t("OwnTracks on Twitter") }}
        </a>
      </li>
    </ul>
  </VueFinalModal>
</template>

<script>
import { mapState } from "vuex";
import { VueFinalModal } from "vue-final-modal";

export default {
  components: {
    VueFinalModal,
  },
  computed: {
    ...mapState(["frontendVersion", "recorderVersion"]),
  },
};
</script>
