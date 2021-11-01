/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { Center, useGLTF, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { BoxHelper } from 'three';

useGLTF.preload('/house-model.glb');

const Model = ({
	meshList,
	setMeshList,
	hoveredMesh,
	setHoveredMesh,
	clickedMesh,
	setClickedMesh,
	selectedMeshes,
	setSelectedMeshes,
	invisibleMesh,
	setInvisibleMesh,
}) => {
	const group = useRef();
	const { nodes, materials } = useGLTF('/house-model.glb');

	const opacityValue = 0.25;
	const opacityValueOutline = 0.05;
	const hoverColor = '#FF7F7F';

	const initialMeshList = [];

	const convertGLTFToMeshList = (nodes, materials) => {
		let nodeName = [];
		let nodeGeometry = [];
		let nodeMaterial = [];

		const meshes = nodes;
		delete meshes.Scene;
		delete meshes.Camera;
		delete meshes.Light;

		Object.values(meshes).forEach((mesh) => {
			nodeName.push(mesh.name);
			nodeGeometry.push(mesh.geometry);
		});

		Object.values(materials).forEach((material) => {
			nodeMaterial.push(material);
		});

		for (var i = 0; i < nodeName.length; i++) {
			initialMeshList.push({
				name: nodeName[i],
				geometry: nodeGeometry[i],
				material: nodeMaterial[i],
				color: 'white',
				opacity: 1,
				isVisible: true,
			});
		}
	};

	const deg2rad = (degrees) => degrees * (Math.PI / 180);

	useEffect(() => {
		convertGLTFToMeshList(nodes, materials);
		setMeshList(initialMeshList);
	}, []);

	// useHelper(group, BoxHelper, 'black');

	return (
		// Drei: Calculates a boundary box and centers its children accordingly.
		<Center>
			{/* <Box position={[-2, 3, 2]} args={[16, 7, 15]}>
				<meshNormalMaterial attach='material' wireframe />
			</Box> */}
			<group
				scale='0.01'
				position={[0, 0, 0]}
				// rotation={[deg2rad(0), deg2rad(-90), deg2rad(0)]}
				ref={group}
				// dispose={null}

				// EVENTS FOR ALL MESHES
				// TODO: if possible move back to groups
				// PROBLEM: LineSegments has onPointerEvents too ..

				// Pointer on mesh
				// if pointer is over a mesh, stop propagation of the event
				// and set the material name as the hoveredElement
			>
				{meshList.map((meshObject) => {
					return (
						<mesh
							name={meshObject.name}
							visible={invisibleMesh !== null && invisibleMesh === meshObject.name ? false : true}
							// geometry={meshObject.geometry}
							// material={meshObject.material}
							// material-color={hoveredMesh === meshObject.name ? hoverColor : meshObject.color}
							// material-transparent={true}
							// visible={meshObject.isVisible}
							// material-visible={invisibleMesh !== null && invisibleMesh === meshObject.name ? false : true}
							// material-opacity={
							// 	selectedMesh !== null && selectedMesh !== meshObject.name ? opacityValue : meshObject.opacity
							// }

							onPointerOver={(event) => {
								// check to prevent event on not visible meshes
								if (event.object.visible) {
									event.stopPropagation();
									setHoveredMesh(event.object.name);
								}
							}}
							// Pointer outside of mesh
							// if pointer is outside of a mesh and does not intersect with any other mesh
							// set the hoveredElement to null
							onPointerOut={(event) => {
								event.intersections.length === 0 && setHoveredMesh(null);
							}}
							// Pointer click on mesh
							// stopPropagation and set current object inside state to the one clicked
							onPointerDown={(event) => {
								// check to prevent event on not visible meshes
								if (event.object.visible) {
									event.stopPropagation();
									setClickedMesh(event.object.name);
									// event.object.material.visible = false;
								}
							}}
							// Pointer click outside of mesh
							// Set current object inside state to the one clicked

							onPointerMissed={(event) => {
								setClickedMesh(null);
							}}
						>
							<bufferGeometry attach='geometry' {...meshObject.geometry} />
							<meshBasicMaterial
								attach='material'
								material={meshObject.material}
								color={hoveredMesh === meshObject.name ? hoverColor : meshObject.color}
								transparent
								visible={invisibleMesh !== null && invisibleMesh === meshObject.name ? false : true}
								opacity={
									selectedMeshes.length > 0 && !selectedMeshes.includes(meshObject.name)
										? opacityValue
										: meshObject.opacity
								}
							/>
							{/* {selectedMesh !== null && selectedMesh !== meshObject.name ? (
							''
						) : ( */}
							<lineSegments renderOrder={100} name={meshObject.name}>
								<edgesGeometry attach='geometry' args={[meshObject.geometry]} />
								{/* Due limitations of OpenGL Core Profile with WebGL renderer on most platforms linewidth will always be 1 regardless of set value.  */}
								<lineBasicMaterial
									color='black'
									attach='material'
									transparent
									opacity={
										selectedMeshes.length > 0 && !selectedMeshes.includes(meshObject.name)
											? opacityValueOutline
											: meshObject.opacity
									}
								/>
							</lineSegments>
							{/* )} */}
						</mesh>
					);
				})}
			</group>
		</Center>
	);
};

export default Model;

useGLTF.preload('/house-model.glb');
