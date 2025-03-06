"use client";

export function Video({ videoRef }) {
  return (
    <video 
      ref={videoRef}
      className="w-full h-full object-cover object-center" 
      controls={false} 
      preload="metadata"
      suppressHydrationWarning
    >
      <source src="/video/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
