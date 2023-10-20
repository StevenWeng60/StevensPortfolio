import { useRef, useEffect } from "react";

import "./Cursor.css";



const Cursor = () => {

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveEvent);
    animateDotOutline();

    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    }
  }, [])

  const delay = 18;

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current){
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    }
    else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  } 

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
    else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  }

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';
    requestRef.current = requestAnimationFrame(animateDotOutline);
  }

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  )
}

export default Cursor;