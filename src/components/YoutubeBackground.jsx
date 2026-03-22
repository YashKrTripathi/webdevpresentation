export default function YoutubeBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0">
      {/* YouTube Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ filter: 'brightness(1.3)' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '150%',
          height: '150%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
        }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Hgg7M3kSqyE?si=hhAtvuDnlHRtBNgg&controls=0&autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE"
            title="YouTube background video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              aspectRatio: 'unset',
            }}
          />
        </div>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90 z-1" />
    </div>
  )
}
