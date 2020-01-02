function draw(scene) {
    //一个球体
    var sphere =  new THREE.SphereGeometry(80,50,50)
    var sphereMaterial = new THREE.MeshPhongMaterial({
         color:0x00dd00
    })
    var sphereGeom = new THREE.Mesh(sphere,sphereMaterial)
    sphereGeom.position.set(0,80,0)
    scene.add(sphereGeom)

}