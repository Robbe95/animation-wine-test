<template>
  <div class="flex flex-row h-80">
    <div id="wave-container">
      <div id="wave">
      </div>
    </div>
    <div class="wrapper">
      <div class="relative z-10 w-40 h-40 bg-white border-4 border-white rounded-full progress-badge" ref="badge" data-completion="70">
        <span class="overflow-visible fill"></span>
      </div>
    </div>
    <div class="absolute top-0 w-full h-full overflow-visible left-1/2">
      <!-- <svg viewBox="0 0 9 61" height="500" class="overflow-visible">
        <path id="follow" ref="follow" d="M 0 0 L 7 14 L 0 21 L 4 34 L 9 40 M 9 40 L 2 52 L 3 61"/>
        <defs>
          <clipPath id="maskRect1" class="h-full" >
            <path id="squiggle" ref="squiggle" d="M0,0"  ></path>
          </clipPath>
        </defs>



        </svg> -->
      <svg xmlns="http://www.w3.org/2000/svg"
        width="60" height="300" viewBox="0 0 60 600">
          <path stroke-width="20" stroke="#000000" fill="red" d="M40,0
            c0,30 -20,45 -20,75
            c0,30  20,45  20,75
            c0,30 -20,45 -20,75
            c0,30  20,45  20,75
            c0,30 -20,45 -20,75
            c0,30  20,45  20,75
            c0,30 -20,45 -20,75
            c0,30  20,45  20,75"/>

          <defs>
            <clipPath id="mask" class="h-full" maskUnits="userSpaceOnUse" >
              <path stroke-width="20" stroke="none" fill="red" d="M40,0
                c0,30 -20,45 -20,75
                c0,30  20,45  20,75
                c0,30 -20,45 -20,75
                c0,30  20,45  20,75
                c0,30 -20,45 -20,75
                c0,30  20,45  20,75
                c0,30 -20,45 -20,75
                c0,30  20,45  20,75"/>
            </clipPath>
          </defs>
        </svg>
    </div>
    <div id="maskDiv" class="absolute top-0 overflow-visible " style="width:3000px; height:1000px; background: -webkit-linear-gradient(left, rgb(0, 156, 204), rgb(0, 111, 145)); clip-path: url(#mask);"></div>

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
    

    const badge = ref(null)
    const follow = ref(null)
    const squiggle = ref(null)

    const loadAnimations = () => {

      gsap.set( badge , { yPercent: 100 } );
      setTimeout( function() {
          var fill = badge.value.querySelector('.fill');
          var percCompleted = parseInt( badge.value.getAttribute('data-completion') );
          var percRemain = 100 - percCompleted;
          var pixMoveTo = Math.round( fill.offsetHeight * ( percRemain/100 ) );

          badge.value.getAttribute( 'data-fill-height' , fill.offsetHeight );
          badge.value.getAttribute( 'data-fill-position' , pixMoveTo );

          if( percCompleted > 0 ){
            gsap.set( fill , { clearProps: 'all' } );
            gsap.fromTo(
              fill, 
              { y: fill.offsetHeight , rotation: 25, duration: 4 },
              { y: pixMoveTo, rotation: 12, ease: "elastic.out(1.2, 1)", yoyo: true, duration: 2 }
            );
          }
      }, 1);
    }

    const loadLine = () => {

      setTimeout( function() {
          var squiggle = document.getElementById('squiggle')
          gsap.to(
            squiggle, 
            { stroke: 'yellow', duration: 2 }
          );
          
      }, 500);
    }

    const mountedFunctions = () => {
      loadAnimations()
      makeSquiggle("squiggle", "follow", 5, 5)
      loadLine()
    }
    //Make path squiggle
    const makeSquiggle = (squigglePathId, followPathId, squiggleStep, squiggleAmplitude) => 
    {
      // setTimeout( function() {

      //   var followPath = document.getElementById(followPathId);
      //   var pathLen = followPath.getTotalLength();

      //   // Adjust step so that there are a whole number of steps along the path
      //   var numSteps = Math.round(pathLen / squiggleStep);

      //   var pos = followPath.getPointAtLength(0);
      //   var newPath = "M" + [pos.x, pos.y].join(',');
      //   var side = -1;
      //   for (var i=1; i<=numSteps; i++)
      //   {
      //     var last = pos;
      //     var pos = followPath.getPointAtLength(i * pathLen / numSteps);

      //     // Find a point halfway between last and pos. Then find the point that is
      //     // perpendicular to that line segment, and is squiggleAmplitude away from
      //     // it on the side of the line designated by 'side' (-1 or +1).
      //     // This point will be the control point of the quadratic curve forming the
      //     // squiggle step.
          
      //     // The vector from the last point to this one
      //     var vector = {x: (pos.x - last.x),
      //                   y: (pos.y - last.y)};
      //     // The length of this vector
      //     var vectorLen = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      //     // The point halfwasy between last point and tis one
      //     var half = {x: (last.x + vector.x/2),
      //                 y: (last.y + vector.y/2)};
      //     // The vector that is perpendicular to 'vector'
      //     var perpVector = {x: -(squiggleAmplitude * vector.y / vectorLen),
      //                       y: (squiggleAmplitude * vector.x / vectorLen)};
      //     // No calculate the control point position
      //     var controlPoint = {x: (half.x + perpVector.x * side),
      //                         y: (half.y + perpVector.y * side)};
      //     newPath += ("Q" + [controlPoint.x, controlPoint.y, pos.x, pos.y].join(','));
      //     // Switch the side (for next step)
      //     side = -side;
      //   }
      //   var squigglePath = document.getElementById(squigglePathId);
      //   squigglePath.setAttribute("d", newPath); }, 1 )
    }

    onMounted(mountedFunctions)

    return { badge };
  },
});
</script>

<style scoped>
.wrapper{
  width: 400px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 150px;
}


.progress-badge .fill{
  display: block;
  width: 300%;
  height: 100%;
  transform: translatex(-50%);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background: #700770; 
}

.fill-line {
  display: block;
  width: 300%;
  height: 100%;
  transform: translatex(-50%);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background: #700770; 
}

.fill-line:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 340px;
  height: 80px;
  background-color: #700770;
  right: -5px;
  top: 40px;
}
.fill-line:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 300px;
  height: 70px;
  background-color: #700770;
  left: 0;
  top: 27px;
}

#follow {
  fill: none;
  stroke: grey;
  stroke-width: .1;
}


</style>
