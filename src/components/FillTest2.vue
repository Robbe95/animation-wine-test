<template>
  <div class="holder clip" rotate="90">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
</div>
  

</template>

<script>
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
  name: "FillTest",
  props: {
  },
  setup: () => {
    
    return {  };
  },
});
</script>

<style scoped>
.holder {
    position: relative;
    width: 50px;
    height: 200px;
}
.clip {
    /* Clip edges, as some of the lines don't terminate nicely. */
    overflow: hidden;
}



.circle {
    position: absolute;
    width: 20px;
    height: 200px;
    background: radial-gradient(16px, transparent, transparent 4px, black 4px, black 10px, transparent 11px);
    background-size: 30px 40px;
}

.circle2 {
    /* Offset to make squigglies line up */
    top: 15px;
    left: 20px;
    background-position: 0px -10px;
}


</style>
