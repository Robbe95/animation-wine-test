<template>
  <div class="relative z-10 bg-primary">
    <div class="w-full h-[600px] bg-local bg-opacity-25 bg-center bg-no-repeat bg-cover bg-primary blur-md" style="background-image: url('cover.jpg');">
      
    </div>
    <div class="absolute z-50 h-12 bg-transparent bg-opacity-100 bottom-40 left-24" ref="bottle" id="bottle">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="200px"
          viewBox="0 0 58.166 58.166" style="enable-background:new 0 0 58.166 58.166;" xml:space="preserve">
        <g>
          <g>
            <path style="fill:#010002;" d="M33.349,6.666V1.65c0-0.912-0.738-1.65-1.647-1.65h-5.234c-0.912,0-1.65,0.739-1.65,1.65v5.016
              H33.349z"/>
            <path style="fill:#010002;" d="M35.517,17.009c-1.578-1.264-2.61-2.191-2.61-3.509V9.583h-7.646V13.5
              c0,1.318-1.034,2.245-2.61,3.509c-1.349,1.081-2.877,2.306-2.877,4.21v8.613h9.309v15.751h-9.311V56.24
              c0,1.063,0.862,1.926,1.926,1.926h14.77c1.063,0,1.926-0.862,1.926-1.926V21.22C38.394,19.315,36.864,18.09,35.517,17.009z"/>
          </g>
        </g>
        </svg>
      </div>
    <div class="w-full h-[600px]  bg-primary  absolute top-0 bg-opacity-80"></div>
    <div class="absolute top-1/2 left-1/2">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
    </div>
  </div>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted  } from "vue";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);

export default defineComponent({
  name: 'Banner',
  props: {
  },
  setup: (props) => {

    const bottle = ref(null)
    const mountedFunctions = () => {
      loadAnimations()
    }
    const loadAnimations = () => {
      let tl = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: '#bottle',
            start: "top center", // when the top of the trigger hits the top of the viewport
            end: "+=800" , // end after scrolling 500px beyond the start
            scrub: 1
          }
        });
      setTimeout( function() {
        tl.to('#bottle', {rotation: -90, y: 200, duration: 10})
      }, 1);
    }

    onMounted(mountedFunctions)
    return { bottle }
  }
})
</script>

<style scoped>

</style>
