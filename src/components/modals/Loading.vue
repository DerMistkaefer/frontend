<template>
  <VueFinalModal name="loading" :click-to-close="false" adaptive>
    <vue-feather type="loader" class="loader-icon" size="36" />
    {{ $t("Loading data, please wait...") }}
    <br />
    <button
      type="button"
      class="button button-primary button-cancel"
      @click="requestAbortController.abort()"
    >
      {{ $t("Cancel") }}
    </button>
  </VueFinalModal>
</template>

<style scoped>
.loader-icon {
  animation: spinning 2s linear infinite;
  margin-right: 5px;
}

.button-cancel {
  display: block;
  margin: 20px auto 0;
}

@keyframes spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
import { mapState } from "vuex";
import { VueFinalModal } from "vue-final-modal";

export default {
  components: {
    VueFinalModal,
  },
  computed: {
    ...mapState(["requestAbortController"]),
  },
};
</script>
