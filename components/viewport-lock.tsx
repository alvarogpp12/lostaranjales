'use client'

import { useEffect } from 'react'

// Prevent pinch-zoom, double-tap zoom and horizontal pan on iOS/Safari
export function ViewportLock() {
	useEffect(() => {
		const preventMultiTouch = (e: TouchEvent) => {
			if (e.touches && e.touches.length > 1) e.preventDefault()
		}

		const preventGesture = (e: Event) => {
			e.preventDefault()
		}

		let lastTouchEnd = 0
		const preventDoubleTap = (e: TouchEvent) => {
			const now = Date.now()
			if (now - lastTouchEnd <= 300) e.preventDefault()
			lastTouchEnd = now
		}

		document.addEventListener('touchstart', preventMultiTouch, {
			passive: false,
		})
		document.addEventListener('touchend', preventDoubleTap, {
			passive: false,
		})
		document.addEventListener('gesturestart', preventGesture)
		document.addEventListener('gesturechange', preventGesture)
		document.addEventListener('gestureend', preventGesture)

		return () => {
			document.removeEventListener('touchstart', preventMultiTouch)
			document.removeEventListener('touchend', preventDoubleTap)
			document.removeEventListener('gesturestart', preventGesture)
			document.removeEventListener('gesturechange', preventGesture)
			document.removeEventListener('gestureend', preventGesture)
		}
	}, [])

	return null
}


