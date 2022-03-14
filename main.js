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

const geometry = new THREE.TetrahedronBufferGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const tetra = new THREE.Mesh(geometry, material);

scene.add(tetra)
const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(6,6,6)

scene.add(pointLight, ambientLight)
const lightHelp = new THREE.PointLightHelper(pointLight)
scene.add(lightHelp)

const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  tetra.rotation.x += 0.01;
  tetra.rotation.y += 0.007;

  controls.update();
  renderer.render(scene, camera);
}

animate();