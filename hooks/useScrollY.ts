import { useEffect, useState } from 'react';


export const useScrollY = (): number => {
	//check browser or server (scroll has sence for browser only)
	const isBrowser = typeof window !== 'undefined';

	const [scrollY, setScrollY] = useState<number>(0);

	const handleScroll = () => {
		//get current scroll (= window.scrollY)
		const currentScrollY = isBrowser ? window.scrollY : 0;
		setScrollY(currentScrollY);
	};

	// listen event
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return scrollY;
};