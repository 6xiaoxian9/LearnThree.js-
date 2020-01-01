function draw(scene,renderer,camera) {
//方体
var cubeGeometry = new THREE.BoxGeometry(20,20,20);
var cubeMaterial = new THREE.MeshLambertMaterial({
    color:0xffaaaa,
    wireframe:true
});
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
cube.position.x = 0;  cube.position.y = 10;  cube.position.z = 80;
cube.castShadow  = true;
cube.onBeforeRender = function(){
    this.rotation.x += 0.02;
    this.rotation.y += 0.02;
    this.rotation.z += 0.02;
}
scene.add(cube)

//球体
var sphereGeometry = new THREE.SphereGeometry(20,40,50);
var sphereMaterial = new THREE.MeshLambertMaterial({
    color:0x777777,
    wireframe: true
});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.castShadow  = true;
var step = 0;
sphere.onBeforeRender = function(){
step += 0.04;
sphere.position.x = 20 + (10*(Math.cos(step)));
sphere.position.y = 20 + (10*Math.abs(Math.sin(step)));
}

scene.add(sphere)

//添加dat.GUI调试控制
var controls = new function(){//以下关键
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
}
var gui = new dat.GUI();
gui.add(controls,'rotationSpeed',0,0.5);
gui.add(controls,'bouncingSpeed',0,0.5);
renderScene();
function renderScene(){
    cube.rotation.x += controls.rotationSpeed;
    cube.rotation.y += controls.rotationSpeed;
    cube.rotation.z += controls.rotationSpeed;
    step += controls.bouncingSpeed;
    sphere.position.x = 20 +(10*(Math.cos(step)));
    sphere.position.y = 20 +(10*Math.abs(Math.sin(step)));
    requestAnimationFrame(renderScene);
    renderer.render(scene,camera)

}


//地面
var planeGeometry = new THREE.PlaneGeometry(300,300,20,20);
var planeMaterial = new THREE.MeshPhongMaterial({
    color:0x222222,
    side: THREE.Double
});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 0;
plane.position.y = -5;
plane.position.z = 0
plane.receiveShadow   = true;
scene.add(plane)

//灯光
var spotlight = new THREE.SpotLight(0xffffff);
spotlight.position.set(-40,60,-10);
spotlight.castShadow = true
scene.add(spotlight);



}