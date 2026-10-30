"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";

type Gaze = { x: string; y: string };

export default function EyeTrackingPortrait() {
  const [gaze, setGaze] = useState<Gaze>({ x: "0px", y: "0px" });

  function trackPointer(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const vertical = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    setGaze({
      x: `${Math.max(-1, Math.min(1, horizontal)) * 3}px`,
      y: `${Math.max(-1, Math.min(1, vertical)) * 2}px`,
    });
  }

  const gazeStyle = {
    "--gaze-x": gaze.x,
    "--gaze-y": gaze.y,
  } as CSSProperties;

  return (
    <figure
      className="portrait-figure"
      aria-label="Portrait of Ashish Gupta"
      onPointerMove={trackPointer}
      onPointerLeave={() => setGaze({ x: "0px", y: "0px" })}
      style={gazeStyle}
    >
      <div className="portrait-canvas">
        <span className="portrait-overline">ENGINEERING · SYSTEMS · DATA</span>
        <img
          className="portrait-image"
          src="/profile-pic.png"
          alt="Ashish Gupta, smiling in glasses and a blue patterned shirt"
          width={612}
          height={612}
          fetchPriority="high"
        />
        <span className="portrait-iris portrait-iris-left" aria-hidden="true"><span /></span>
        <span className="portrait-iris portrait-iris-right" aria-hidden="true"><span /></span>
        <span className="portrait-years"><strong>09+</strong><small>YEARS<br />BUILDING</small></span>
      </div>
      <figcaption className="portrait-caption">
        <span>ASHISH GUPTA</span>
        <span>VIENNA, AUSTRIA <i>·</i> OPEN TO THE NEXT CHALLENGE</span>
      </figcaption>
    </figure>
  );
}
