<template>
  <div class="min-h-screen">
    <div class=" bg-secondary">
      <router-view v-slot="{ Component }">
        <transition>
          <component  :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
 
export default defineComponent({
  name: 'App',
})
</script>

<style>

</style>
