import React, { useEffect, useRef, useState } from 'react';

const Timer = (props) => {
	const state = {
		timerValue: 0
	}
	const [data, setData] = useState(state);
	const [_props, setProps] = useState(props);
	const timer = useRef();

	useEffect(() => {
		const newState = {
			timerStarted: !props.timerStarted
		};
		setProps({ ...newState });
		if (newState.timerStarted) {
			timer.current = setInterval(() => {
				setData((data) => data + 1);
			}, 1000);
		} else {
			clearInterval(timer);
			timer.current = null;
			setData(0);
		}
		setProps(props);
	}, [props])

	useEffect(() => {
		clearInterval(timer);
		timer.current = null;
		return () => {
			console.log('Timer unmounted')
		}
	}, [])

	return (
		props.timerStarted && <div>Value: {data}</div>
	)

}

export default Timer;