const AnimationVideo = () => {
  return (
    <div>
      <div className=" h-full overflow-hidden">
        <video autoPlay loop={true} className="w-full">
          <source
            src="https://media-d.global.abb/is/content/abbc/abb-hologram-animation-new"
            type="video/mp4"
          />
          <img
            data-mode="smartcrop"
            data-src="https://media-d.global.abb/is/image/abbc/abb-hologram-animation-new"
            className="dynamicmedia-image"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          />
        </video>
      </div>
    </div>
  );
};

export default AnimationVideo;
