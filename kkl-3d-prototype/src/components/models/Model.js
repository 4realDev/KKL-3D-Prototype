/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/house-model.glb');

const Model = ({
	meshList,
	setMeshList,
	hoveredMesh,
	setHoveredMesh,
	clickedMesh,
	setClickedMesh,
	selectedMesh,
	setSelectedMesh,
}) => {
	const group = useRef();
	const { nodes, materials } = useGLTF('/house-model.glb');

	const opacityValue = 0.5;
	const hoverColor = 'tomato';

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
			});
		}
	};

	useEffect(() => {
		convertGLTFToMeshList(nodes, materials);
		setMeshList(initialMeshList);
	}, []);

	return (
		<group
			scale='0.01'
			ref={group}
			dispose={null}
			// events for all meshes

			// Pointer on mesh
			// if pointer is over a mesh, stop propagation of the event
			// and set the material name as the hoveredElement
			onPointerOver={(event) => {
				event.stopPropagation();
				setHoveredMesh(event.object.name);
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
				event.stopPropagation();
				setClickedMesh(event.object.name);
				// event.object.material.visible = false;
			}}
			// Pointer click outside of mesh
			// Set current object inside state to the one clicked
			onPointerMissed={(event) => {
				setClickedMesh(null);
			}}
		>
			{meshList.map((meshObject) => {
				return (
					<mesh
						name={meshObject.name}
						geometry={meshObject.geometry}
						material={meshObject.material}
						material-color={hoveredMesh === meshObject.name ? hoverColor : meshObject.color}
						material-transparent={true}
						material-opacity={
							selectedMesh !== null && selectedMesh !== meshObject.name ? opacityValue : meshObject.opacity
						}
					>
						{selectedMesh !== null && selectedMesh !== meshObject.name ? (
							''
						) : (
							<lineSegments renderOrder={100}>
								<edgesGeometry attach='geometry' args={[meshObject.geometry]} />
								{/* Due limitations of OpenGL Core Profile with WebGL renderer on most platforms linewidth will always be 1 regardless of set value.  */}
								<lineBasicMaterial color='black' attach='material' />
							</lineSegments>
						)}
					</mesh>
				);
			})}
		</group>
	);
};

export default Model;

useGLTF.preload('/house-model.glb');