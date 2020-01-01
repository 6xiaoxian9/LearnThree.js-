function draw(scene,clock) {
var textureLoader  = new THREE.TextureLoader();
//太阳
var sun = new THREE.SphereGeometry(50,50,50);
var sunMaterial = new THREE.MeshPhongMaterial({
    map:textureLoader.load('./assets/2k_sun.jpg'),
    color:0xffaaaa,
    // wireframe:true
});
var sunModel = new THREE.Mesh(sun,sunMaterial);

sunModel.position.set(0,60,0)
sunModel.castShadow  = true;
scene.add(sunModel)

//地球
var sphereGeometry = new THREE.SphereGeometry(20,40,50);
var sphereMaterial = new THREE.MeshPhongMaterial({
    map:textureLoader.load('./assets/earth_atmos_2048.jpg'),
    specular:0x333333,
});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
// sphere.position.y = 60
sphere.castShadow  = true;

//这个函数 每帧都会在渲染之前执行一次  所有的网格模型 都有这个方法
sphere.onBeforeRender = function (renderer, scene, camera) {
    var elapsed =  clock.getElapsedTime();
    this.position.set(Math.sin(elapsed)*200,60,Math.cos(elapsed)*200);
    this.rotation.y += -Math.PI/120

}

scene.add(sphere)

//月球
var moonGeometry = new THREE.SphereGeometry(5,40,50);
var moonMaterial = new THREE.MeshPhongMaterial({
    map:textureLoader.load('./assets/moon_1024.jpg'),
    specular:0x333333,

});
var moon = new THREE.Mesh(moonGeometry,moonMaterial);
// sphere.position.y = 60
moon.castShadow  = true;

//这个函数 每帧都会在渲染之前执行一次  所有的网格模型 都有这个方法
moon.onBeforeRender = function (renderer, scene, camera) {
    var elapsed =  clock.getElapsedTime();
    this.position.set((Math.sin(elapsed)*50+Math.sin(elapsed)*200),60,(Math.cos(elapsed)*100+Math.cos(elapsed)*50))
}

scene.add(moon)

}