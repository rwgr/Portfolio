<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from "three";
import { onMounted, onBeforeUnmount, ref } from "vue";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

import { RGBShiftShader } from "three/addons/shaders/RGBShiftShader.js";
import { DotScreenShader } from "three/addons/shaders/DotScreenShader.js";
import { AfterimagePass } from "three/addons/postprocessing/AfterimagePass.js";
import { BokehPass } from "three/addons/postprocessing/BokehPass.js";

import { useStore } from "vuex";
import { computed } from "vue";

import logoJavascript from "@/assets/learning/javascript-logo.svg";
import logoCss from "@/assets/learning/css-logo.svg";
import logoHtml from "@/assets/learning/html-logo.svg";
import logoVue from "@/assets/learning/vue-logo.svg";
import logoExpressjs from "@/assets/learning/expressjs-logo.svg";
import logoTailwind from "@/assets/learning/tailwind-logo.svg";
import logoMongodb from "@/assets/learning/mongodb-logo.svg";
import logoNodejs from "@/assets/learning/nodejs-logo.svg";

export default {
  components: {},
  setup() {
    const store = useStore();

    const positioningState = computed(() => store.getters.getPositioningState);
    const controlState = computed(() => store.getters.getControlState);
    const animateState = computed(() => store.getters.getAnimateState);
    const resetPositioning = computed(() => store.getters.getResetPositioning);
    const postProcessing = computed(() => store.getters.getPostProcessing);

    let camera = ref(null);
    let scene = ref(null);
    let renderer = ref(null);
    let parameters = ref(null);
    let materials = ref([]);
    let particles = ref(null);
    let geometry = ref(null);
    let composer = ref(null);
    let afterimagePass = ref(null);

    let mouseX = 0,
      mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function init() {
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 100;

      scene = new THREE.Scene();

      geometry = new THREE.BufferGeometry();
      const vertices = [];

      const textureLoader = new THREE.TextureLoader();

      const sprite1 = textureLoader.load(logoJavascript);
      const sprite2 = textureLoader.load(logoCss);
      const sprite3 = textureLoader.load(logoHtml);
      const sprite4 = textureLoader.load(logoVue);
      const sprite5 = textureLoader.load(logoExpressjs);
      const sprite6 = textureLoader.load(logoTailwind);
      const sprite7 = textureLoader.load(logoMongodb);
      const sprite8 = textureLoader.load(logoNodejs);

      for (let i = 0; i < 10000; i++) {
        const x = 1;
        const y = 1;
        const z = 1;

        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      parameters = [
        [[0.95, 0.01, 0.5], sprite2, 9],
        [[0.95, 0.01, 0.5], sprite3, 9],
        [[0.95, 0.01, 0.55], sprite1, 9],
        [[0.95, 0.01, 0.5], sprite5, 9],
        [[0.95, 0.01, 0.5], sprite4, 9],
        [[0.95, 0.01, 0.5], sprite6, 9],
        [[0.95, 0.01, 0.5], sprite7, 9],
        [[0.95, 0.01, 0.5], sprite8, 9],
      ];

      for (let i = 0; i < parameters.length; i++) {
        const color = parameters[i][0];
        const sprite = parameters[i][1];
        const size = parameters[i][2];

        materials[i] = new THREE.PointsMaterial({
          size: size,
          map: sprite,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
        });
        materials[i].color.setHSL(color[0], color[1], color[2]);

        let particles = new THREE.Points(geometry, materials[i]);

        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;

        scene.add(particles);

        const colourBackground = new THREE.Color("#3c7045");
        scene.background = colourBackground;
      }

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // postprocessing

      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      document.body.style.touchAction = "none";
      document.body.addEventListener("pointermove", onPointerMove);

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return;

      if (controlState.value === true) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      }
    }

    // Animated background controls

    function positioningControl() {
      store.dispatch("positioningToggle");
    }

    function resetPositioningControl() {
      store.dispatch("resetPositioning");
    }

    function resetPost() {
      store.dispatch("resetPost");
    }

    function animate() {
      requestAnimationFrame(animate);

      render();
      // stats.update();
    }

    function render() {
      const time = Date.now() * 0.00005;

      // Move background //
      if (animateState.value === true) {
        camera.position.x += (mouseX - camera.position.x) * 0.005;
        camera.position.y += (-mouseY - camera.position.y) * 0.005;

        camera.lookAt(scene.position);
        for (let i = 0; i < scene.children.length; i++) {
          const object = scene.children[i];

          if (object instanceof THREE.Points) {
            object.rotation.y = time * (i < 8 ? i + 1 : -(i + 1));
          }
        }

        for (let i = 0; i < materials.length; i++) {
          const color = parameters[i][0];

          const h = ((360 * (color[0] + time)) % 360) / 360;
          materials[i].color.setHSL(h, color[1], color[2]);
        }
      }

      if (positioningState.value === false) {
        let vertices = [];
        for (let i = 0; i < 10000; i++) {
          const x = Math.random() * 2000 - 1000;
          const y = Math.random() * 2000 - 1000;
          const z = Math.random() * 2000 - 1000;

          vertices.push(x, y, z);

          geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
          );
        }
        positioningControl();
      }

      if (resetPositioning.value === true) {
        geometry.deleteAttribute("position");
        resetPositioningControl();
      }

      //post processing

      if (postProcessing.value === "rgb") {
        const effect2 = new ShaderPass(RGBShiftShader);
        effect2.uniforms["amount"].value = 0.15;
        composer.addPass(effect2);

        resetPost();
      }

      if (postProcessing.value === "after") {
        afterimagePass = new AfterimagePass();
        composer.addPass(afterimagePass);

        resetPost();
      }

      if (postProcessing.value === "dots") {
        const effect1 = new ShaderPass(DotScreenShader);
        effect1.uniforms["scale"].value = 4;
        composer.addPass(effect1);

        resetPost();
      }

      if (postProcessing.value === "bokeh") {
        const bokehPass = new BokehPass(scene, camera, {
          focus: 1.0,
          aperture: 0.025,
          maxblur: 0.006,
        });
        composer.addPass(bokehPass);

        resetPost();
      }

      if (postProcessing.value === "delete") {
        for (let i = 1; i < composer.passes.length; i++) {
          const passes = composer.passes;

          composer.removePass(passes[i]);
        }
      }

      composer.render(scene, camera);
    }

    onMounted(() => {
      init();
      animate();

      // Listens for resizes and adjusts window/camera
      window.addEventListener("resize", () => {
        onWindowResize();
      });
    });

    onBeforeUnmount(() => {
      // Removes event listener
      window.removeEventListener("resize", () => {});
    });

    return {};
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.controls-btn--post {
  width: 3rem;
  text-align: center;
  border-radius: 0%;
}
</style>
