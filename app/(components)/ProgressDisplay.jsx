import React from "react";

const ProgressDisplay = ({ progress }) => {
	return (
		<div className=' w-full bg-white rounded-full h-2.5'>
			<div
				className=' bg-blue-400 h-2.5 rounded-full'
				style={{ width: `${progress}%` }}
			></div>
		</div>
	);
};

export default ProgressDisplay;
