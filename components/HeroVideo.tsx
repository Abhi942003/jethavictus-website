/**
 * Hero video background — plays at full visibility, no color tint
 * or scrim over it. Falls back to the dark navy background color
 * only for the brief moment before the video file loads.
 *
 * Video file expected at: public/hero-bg.mp4
 */
export default function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
