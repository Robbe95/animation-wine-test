<template>

    <div class="wrapper" :style="{ 'margin-top': drainHeight - drainOffset  + 'px'}">
      <div class="relative  w-auto  bg-white border-4 border-white rounded min-h-[150px] h-full min-w-max -rotate-6 progress-badge " :style="{ transform: 'rotate('+ rotation+'deg)'}" ref="badge" :data-completion="fillAmount">
        <div class="relative overflow-visible">
          <div class="absolute  w-3 ml-[0.4px] overflow-hidden bg-transparent line" :style="{ 'margin-left': drain + drainUnit, 'top': '-' + drainHeight + 'px', 'height': drainHeight + 40 + 'px'}"  ref="line" :id="'line' + id">
            <span class="relative invisible fill-line" ></span>
          </div>
        </div>
        <div class="absolute w-full h-full overflow-hidden rounded">
          <span class="invisible fill" :class="leftOpen ? 'left-fill' : 'right-fill'"></span>
        </div>
          
        <div class="relative z-10 mx-1 text-white" :style="leftOpen ? 'text-align:right' : 'text-align:left'">
          <div class="relative font-bold text-white">
            <slot name="title"></slot>

          </div>
          <div class="relative ">
            <slot></slot>
          </div>

        </div>         

      </div>
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
  name: "FillBox",
  props: {
    rotation: {
      type: Number,
      default: -6
    }, 
    drain: {
      type: Number,
      default: 0.4
    }, 
    drainUnit: {
      type: String,
      default: 'px'
    },
    drainHeight: {
      type: Number,
      default: 200
    },
    id: {
      type: Number    
    }, 
    fillAmount: {
      type: Number,
      default: 110
    },
    title: {
      type: String,
      default: 'Hey'
    },
    drainOffset: {
      type: Number,
      default: 30
    },
    leftOpen: {
      type: Boolean,
      default: false
    }
  },
  setup: (props) => {
  
    const badge = ref(null)
    const line = ref(null)

    const mountedFunctions = () => {
      loadAnimations()
    }
    const loadAnimations = () => {
      
      setTimeout( function() {
        let tl = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: '#line' + props.id,
            start: "top center", // when the top of the trigger hits the top of the viewport
            end: "+=" + props.drainHeight * 4, // end after scrolling 500px beyond the start
            scrub: 1
          }
        });

        var fill = badge.value.querySelector('.fill');
        var fillLine = line.value.querySelector('.fill-line');

        var percCompleted = parseInt( badge.value.getAttribute('data-completion') );
        var percRemain = 100 - percCompleted;
        var pixMoveTo = Math.round( fill.offsetHeight * ( percRemain/100 ) );
        badge.value.getAttribute( 'data-fill-height' , fill.offsetHeight );
        badge.value.getAttribute( 'data-fill-position' , pixMoveTo );

        if( percCompleted > 0 ){
          gsap.set( fill , { clearProps: 'all', y: fill.offsetHeight , rotation: 25 } );
          gsap.set( fillLine , { clearProps: 'all' } );

          tl.set(fillLine, {visibility: 'visible'}).to(
            fillLine, 
            { y: pixMoveTo, ease: "linear", duration: 1 }
          )

          console.log(props.leftOpen)
          if(props.leftOpen) {
            tl.set(fill, {visibility: 'visible', delay: -0.7 }).fromTo(
              fill, 
              { y: fill.offsetHeight , rotation: -25, duration: 5, delay: -0.5 },
              { y: pixMoveTo, rotation: -12, ease: "elastic.out(1.2, 1)", duration: 5, delay: -0.7  }
            )

          } else {
            tl.set(fill, {visibility: 'visible', delay: -0.7 }).fromTo(
              fill, 
              { y: fill.offsetHeight , rotation: 25, duration: 5, delay: -0.5 },
              { y: pixMoveTo, rotation: 12, ease: "elastic.out(1.2, 1)", duration: 5, delay: -0.7  }
            )
          }
        }
      }, 1);
    }

    onMounted(mountedFunctions)

    return { badge, line };
  },
});
</script>

<style scoped>
.wrapper{
  width: 400px;
  margin-left: 20%;
  transform: translateX(-50%);
}


.progress-badge .fill{
  display: block;
  width: 300%;
  height: 400%;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: rgba(130, 44, 64, var(--tw-bg-opacity));
  border-radius: 100% 50%;
}

.left-fill {
transform: translatex(-30%)
}

.right-fill {
  transform: translatex(-50%)
}

.fill-line {
  display: block;
  width: 300%;
  height: 200%;
  transform: translatey(-100%);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: rgba(130, 44, 64, var(--tw-bg-opacity));

}



#follow {
  fill: none;
  stroke: grey;
  stroke-width: .1;
}


</style>
