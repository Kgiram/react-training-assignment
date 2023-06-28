import React, { useEffect, useState } from 'react';

const Timer = () => {
	const [value, setValue] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		let intervalId;

		if (isRunning) {
			intervalId = setInterval(() => {
				setValue((prevCounter) => prevCounter + 1);
			}, 1000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isRunning]);

	const handleToggle = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
		setValue(0);
		setShow(!show)
	};

	return (
		<div>
			<button onClick={handleToggle}>{isRunning ? "STOP" : "START"}</button>
			{show && <div style={{ marginTop: "20px" }}> Value:: {value}</div>}
		</div>
	);
};

export default Timer;