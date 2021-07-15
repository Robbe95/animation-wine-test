<template>
  <div class="min-h-screen ">
    <Banner class="h-full"></Banner>
    <FillBox style="width: 400px; margin-left: 20%; transform: translateX(-50%);" :id='1' :fillAmount="110">
      <template v-slot:title>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
    </FillBox>
    <FillBox style="width: 1000px; margin-left: 30%; transform: translateX(-50%);" :drainHeight="200" :drain="200" :id='2' :fillAmount="120" :rotation="6" :leftOpen="true">
      <template v-slot:default>
        <div class="flex flex-row justify-between">
          <div>
            Heerlijke cocktails op de markt van zonhoven
          </div>
          <div class="flex items-center justify-end m-4">
            <img class="border-4 border-white rounded-lg h-80 " src="@/assets/download.webp"/>
          </div>
        </div>
        

      </template>
    </FillBox>
    <FillBox style="width: 300px; margin-left: 20%; transform: translateX(-50%);" :drainHeight="200" :drain="50" :drainOffset="38" :id='3' :fillAmount="110" :rotation="0"/>
    <FillBox style="width: 1000px; margin-left: 40%; transform: translateX(-50%);" :drainHeight="200" :drain="200" :drainOffset="43" :id='4' :fillAmount="110"/>
    <FillBox style="width: 300px; margin-left: 40%; transform: translateX(-50%);" :drainHeight="200" :drain="50" :id='5' :fillAmount="105" :rotation="20" :leftOpen="true"/>
    <FillBox style="width: 300px; margin-left: 40%; transform: translateX(-50%);" :drainHeight="500" :drain="100" :drainOffset="55" :id='6' :fillAmount="100"/>
    <FillBox style="width: 98%; margin-left: 50%; height: 400px" :drainHeight="600" :drain="45" drainUnit="%" :id='7' :fillAmount="140" :rotation="0"/>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColorTest from '@/components/ColorTest.vue'
import Banner from '@/components/home/Banner.vue'
import FillTest from '@/components/FillTest.vue'
import BeerTest from '@/components/BeerTest.vue'
import FillTest2 from '@/components/FillTest2.vue'
import FillBox from '@/components/FillBox.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ColorTest,
    Banner,
    FillTest,
    BeerTest,
    FillTest2,
    FillBox
  }
})
</script>

<style>

</style>
