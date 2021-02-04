
AFRAME.registerComponent('spawn', {
  schema: {identity: {default:''}, colour1: {default:''}, colour2: {default:''}},
  
  init: function () {
    const data = this.data;
    data2 = data;
    const el = this.el;
    followCam = false;

    el.addEventListener('click', function() {
      if (followCam){
        const box = document.querySelector(data.identity)
        boxPos = box.getAttribute('position');
        box.setAttribute('position',{x: boxPos.x, y: 0.5, z: boxPos.z});
        box.setAttribute('color',data.colour2);
        followCam = false;
      }
      else{
        data2 = data;
        followCam = true;
      }
      /*
      const spawnEl = document.createElement('a-entity');
      pos = Math.floor(Math.random() * (3 - -3) ) + -3;;  
      // Snap intersection point to grid and offset from center.
      spawnEl.setAttribute('geometry', {
        primitive: 'sphere',
        radius: 0.3,
      });
      followCam = true;
      
      spawnEl.setAttribute('position', {x: pos, y: 2, z: -3});

      // Append to scene.
      el.sceneEl.appendChild(spawnEl);
      console.log('run the thing');
      */
    });
  },
  tick: function () {
    const box = document.querySelector(data2.identity)
    const cam = document.querySelector('a-camera')
    camPos = cam.getAttribute('position');

    if(followCam){
      box.setAttribute('position',{x: camPos.x, y: camPos.y, z: camPos.z-3});
      box.setAttribute('color',data2.colour1);
    }
  }
});