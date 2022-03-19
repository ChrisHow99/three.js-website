import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.SphereGeometry(2, 24, 24);
const material = new THREE.MeshStandardMaterial({color:0xFFCC33});
const tetra = new THREE.Mesh(geometry, material);

scene.add(tetra)
const ambientLight = new THREE.AmbientLight(0x222222)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,0)

scene.add(pointLight, ambientLight)
const lightHelp = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelp,gridHelper)


const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(1500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);


function createPlanet(textureMap, normalMap,size,notsure,y,z,x){
  const texture = new THREE.TextureLoader().load(textureMap);
  const nTexture = new THREE.TextureLoader().load(normalMap);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(size, notsure, y),
    new THREE.MeshStandardMaterial({
      map: texture,
      normalMap: nTexture,
    })
  )
    planet.position.z = z;
    planet.position.setX(x);
    return planet;
}

const earth2 = createPlanet('/assets/Earth2.jpg','/assets/earthNormal.jpg',1,40,40,60,100)
scene.add(earth2);


const earth = createPlanet('/assets/Earth2.jpg','/assets/earthNormal.jpg',1,40,40,30,-30)
scene.add(earth);

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.1;
  

  controls.update();
  renderer.render(scene, camera);
}


animate();