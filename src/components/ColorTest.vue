<template>
  <div class="flex flex-row">
    <div class="bg-primary h-40 w-40">

    </div>
    <div class="bg-secondary h-40 w-40">

    </div>
    <div class="bg-accent h-40 w-40">

    </div>
    <div class="bg-details h-40 w-40">

    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'ColorTest',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>

</style>
