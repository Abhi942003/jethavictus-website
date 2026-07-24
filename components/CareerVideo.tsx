/**
 * Career page hero video background — same pattern as HeroVideo.
 * Video file expected at: public/career-bg.mp4
 * Poster image expected at: public/career-poster.jpg
 */
export default function CareerVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/career-poster.jpg"
      >
        <source src="/career-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
