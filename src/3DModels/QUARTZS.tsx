import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store';
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
type GLTFResult = GLTF & {
  nodes: {
    SOLE_02: THREE.Mesh
    PUFFER_EXTERNAL: THREE.Mesh
    LOGO: THREE.Mesh
    SOLE_01002: THREE.Mesh
    SOLE_02001: THREE.Mesh
    PUFFER_EXTERNAL001: THREE.Mesh
    LOGO001: THREE.Mesh
    SOLE_01003: THREE.Mesh
    PUFFER_INTERNAL003: THREE.Mesh
    PUFFER_INTERNAL002: THREE.Mesh
    Plane011: THREE.Mesh
    Plane011_1: THREE.Mesh
    Plane011_2: THREE.Mesh
    SOLE_01004: THREE.Mesh
    Plane009: THREE.Mesh
    Plane009_1: THREE.Mesh
    Plane009_2: THREE.Mesh
    SOLE_01005: THREE.Mesh
  }
  materials: {
    ['002']: THREE.MeshStandardMaterial
    ['001']: THREE.MeshStandardMaterial
    JEWEL: THREE.MeshPhysicalMaterial
    ['003']: THREE.MeshStandardMaterial
    TOPSTITCH: THREE.MeshStandardMaterial
    ['001.5']: THREE.MeshStandardMaterial
    ['002.5']: THREE.MeshStandardMaterial
    ['002']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const selectedColor = useSelector((state: RootState) => state.app.selectedColor);
  const groupRef = useRef<THREE.Group>(null!);
  const [groupRotation, setGroupRotation] = useState(0);


  console.log(selectedColor);
  // useEffect(() => {
  //   if (groupRef.current) {
  //     const center = new THREE.Vector3();
  //     const box = new THREE.Box3().setFromObject(groupRef.current);
  //     box.getCenter(center);
  //     groupRef.current.position.sub(center);
  //   }
  // }, [groupRef.current]);


  const { nodes, materials } = useGLTF('/ShoeStoreThreeD/Model/QUARTZ.glb') as GLTFResult

  useFrame(() => {
    if (groupRef.current) {
      setGroupRotation(groupRotation + 0.001);
      groupRef.current.rotation.y = groupRotation;
    }
  });


  return (
    <group ref={groupRef} {...props} >
      <group dispose={null} scale={0.3} >
        <mesh geometry={nodes.SOLE_02.geometry} material={new THREE.MeshStandardMaterial({ color: selectedColor.hex })} position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55} />
        <mesh geometry={nodes.PUFFER_EXTERNAL.geometry} material={materials['001']} position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55} >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        <mesh geometry={nodes.LOGO.geometry} material={materials.JEWEL} position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55} />
        <mesh geometry={nodes.SOLE_01002.geometry} material={materials['003']} position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55} >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        <mesh geometry={nodes.SOLE_02001.geometry} material={materials['002']} position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55} >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        <mesh geometry={nodes.PUFFER_EXTERNAL001.geometry} material={materials['001']} position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55} >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        <mesh geometry={nodes.LOGO001.geometry} material={materials.JEWEL} position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55} />
        <mesh geometry={nodes.SOLE_01003.geometry} material={materials['003']} position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55} >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        <mesh geometry={nodes.PUFFER_INTERNAL003.geometry} material={materials.TOPSTITCH} position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55} />
        <mesh geometry={nodes.PUFFER_INTERNAL002.geometry} material={materials.TOPSTITCH} position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55} />
        <group position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55}>
          <mesh geometry={nodes.Plane011.geometry} material={materials['001.5']} />
          <mesh geometry={nodes.Plane011_1.geometry} material={materials['002.5']} >
            <meshStandardMaterial color={selectedColor.hex} />
          </mesh>
          <mesh geometry={nodes.Plane011_2.geometry} material={materials['002']} >
            <meshStandardMaterial color={selectedColor.hex} />
          </mesh>
        </group>
        <mesh geometry={nodes.SOLE_01004.geometry} material={materials['002']} position={[0.02, 0.01, -0.01]} rotation={[Math.PI, 0.46, 3.14]} scale={1.55} >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
        <group position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55}>
          <mesh geometry={nodes.Plane009.geometry} material={materials['001.5']} />
          <mesh geometry={nodes.Plane009_1.geometry} material={materials['002']} >
            <meshStandardMaterial color={selectedColor.hex} />
          </mesh>
          <mesh geometry={nodes.Plane009_2.geometry} material={materials['002.5']} >
            <meshStandardMaterial color={selectedColor.hex} />
          </mesh>
        </group>
        <mesh geometry={nodes.SOLE_01005.geometry} material={materials['002']} position={[-0.01, 0.04, 0.07]} rotation={[-Math.PI, 0.46, -0.31]} scale={-1.55}  >
          <meshStandardMaterial color={selectedColor.hex} />
        </mesh>
      </group>

    </group>

  )
}

useGLTF.preload('/Shoe3DStore/Model/QUARTZ.glb')
