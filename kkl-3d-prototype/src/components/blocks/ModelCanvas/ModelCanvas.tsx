import { OrbitControlsProps, Stats } from '@react-three/drei';
import { Canvas, PerspectiveCameraProps } from '@react-three/fiber';
import React from 'react';
// npm install @react-three/fiber
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { CANVAS_DEBUG } from '../../../App';
import { roomModelList } from '../../../data/roomData';
import { setIdleState, useCameraStore } from '../../../store/useCameraStore';
import { setHoveredMesh, setIdleState, useCameraStore } from '../../../store/useCameraStore';
import CameraControls from '../../threeJs/CameraControls';
import RoomPositionMarkers from '../../threeJs/RoomPositionMarkers';
import styles from './ModelCanvas.module.scss';

// import Model from '../../threeJs/Model';
const Model = React.lazy(() =>
	import('../../threeJs/Model').then((module) => ({
		default: module.default,
	}))
);

const ModelCanvas = () => {
	const hasAnimation = useCameraStore((state) => state.hasAnimation);

	// const [hoveredMesh, setHoveredMesh] = useState<null | string>(null);
	const hoveredMesh = useCameraStore((state) => state.hoveredMesh);
	const [mouseDown, setMouseDown] = useState(false);

	const controlsRef = useRef<OrbitControlsProps>();
	const cameraRef = useRef<PerspectiveCameraProps>();

	return (
		<div
			id='canvas'
			className={styles.canvas}
			onMouseDown={() => {
				setIdleState(false);
				// setHasAnimation(false);
				setMouseDown(true);
			}}
			onMouseUp={() => {
				setMouseDown(false);
				// setHasAnimation(true);
			}}
		>
			<Canvas>
				<CameraControls
					camera={cameraRef}
					controls={controlsRef}
					hasAnimation={hasAnimation}
					mouseDown={mouseDown}
					fov={45}
					far={200}
				/>

				{/* create Loader UI as fallback before useLoader promise is returned */}
				{/* TODO: Loading <SimpleModel/> leads some time to ThreeJS lost Context error! */}
				<Suspense fallback={null}>
					<Model hoveredMesh={hoveredMesh} setHoveredMesh={setHoveredMesh} />

					{CANVAS_DEBUG && (
						<RoomPositionMarkers
							markerPositions={roomModelList.map(({ camPos }) => camPos)}
							targetPoints={roomModelList.map(({ camTarget }) => camTarget)}
						/>
					)}
				</Suspense>
				{CANVAS_DEBUG && <Stats />}
				{CANVAS_DEBUG && <primitive object={new THREE.AxesHelper(100)} />}
			</Canvas>
		</div>
	);
};

export default ModelCanvas;
