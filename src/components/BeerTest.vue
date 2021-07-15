<template>
  <div class="container">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
      x="0px"
      y="0px"
      viewBox="0 0 600 600"
      enable-background="new 0 0 600 600"
      xml:space="preserve"
    >
      <mask id="beerStreamMask">
        <rect fill="#FFFFFF" x="260" y="300" width="500" height="2000" />
      </mask>

      <g mask="url(#beerStreamMask)">
        <path
          class="beerStream"
          fill="#F1B021"
          d="M285.9,599c-4.4,0-8-3.6-8-8c0-9.5,0.3-14.4,0.6-19c0.3-4.6,0.6-9,0.6-18c0-8.5-0.8-12.6-1.7-16.9
			c-0.9-4.7-2-10-2-20.1c0-9.6,0.4-14.5,0.9-19.2c0.4-4.6,0.8-8.9,0.8-17.8c0-9.8,0.7-14.8,1.4-19.6c0.6-4.5,1.2-8.7,1.2-17.4
			c0-8-1.2-11.7-2.6-16.1c-1.6-4.9-3.3-10.4-3.3-20.9c0-9.8,0.7-14.8,1.4-19.7c0.7-4.5,1.3-8.7,1.3-17.3c0-8.7-0.6-12.9-1.3-17.3
			c-0.7-4.8-1.5-9.8-1.5-19.7c0-10.3,1.5-15.8,2.8-20.6c1.2-4.4,2.2-8.2,2.2-16.4c0-9.3,0-14,0.1-18.6c0-4.5,0.1-9.2,0.1-18.4
			c0-9.4,0.2-14.2,0.4-18.8c0.2-4.7,0.3-9.1,0.3-18.2c0-8.2-1-12-2.2-16.5c-1.3-4.8-2.7-10.3-2.7-20.5c0-4.4,3.6-8,8-8s8,3.6,8,8
			c0,8.2,1,12,2.2,16.5c1.3,4.8,2.7,10.3,2.7,20.5c0,9.4-0.2,14.2-0.4,18.8c-0.2,4.7-0.3,9.1-0.3,18.2c0,9.3,0,14-0.1,18.6
			c0,4.5-0.1,9.2-0.1,18.4c0,10.3-1.5,15.8-2.8,20.6c-1.2,4.4-2.2,8.2-2.2,16.4c0,8.7,0.6,12.9,1.3,17.3c0.7,4.8,1.5,9.8,1.5,19.7
			c0,9.8-0.7,14.8-1.4,19.7c-0.7,4.5-1.3,8.7-1.3,17.3c0,8,1.2,11.7,2.6,16.1c1.6,4.9,3.3,10.4,3.3,20.9c0,9.8-0.7,14.8-1.4,19.6
			c-0.6,4.5-1.2,8.7-1.2,17.4c0,9.6-0.4,14.5-0.9,19.2c-0.4,4.6-0.8,8.9-0.8,17.8c0,8.5,0.8,12.6,1.7,16.9c0.9,4.7,2,10,2,20.1
			c0,9.5-0.3,14.4-0.6,19c-0.3,4.6-0.6,9-0.6,18C293.9,595.4,290.3,599,285.9,599z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(
  CSSRulePlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,
  PixiPlugin,
  TextPlugin,
  ScrollToPlugin,
  ScrollTrigger
);

export default defineComponent({
  name: "BeerTest",
  props: {},
  setup: () => {
    const loadAnimations = () => {
      var beerStream = document.querySelector('.beerStream');

 

      var tl = new gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "center center", // end after scrolling 500px beyond the start
          scrub: 0.1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
       });
      tl.timeScale(2.6)
      .fromTo(beerStream, 4,{
        y:-450
      },{
        y:250,
        ease:'linear.easeNone'
      })
    };




    onMounted(
      loadAnimations,
    );

    return {  };
  },
});
</script>

<style scoped>

.container{
  width:600px;
}

.track{
	
	position:absolute;
	top:50%;
	left:50%;
	width:400px;
	height:30px;
	border:1px solid #888888;
	border-radius:18px;
}

.drag{
	
	position:absolute;
	top:0%;
  transform: translate(-50%, -50%);
	left:0;
	width:40px;
	height:40px;
	background-color:#ededed;
	border-radius:50%;
}

.flame{
  position:absolute;
  left:30%;
  top:30%;
}

</style>
