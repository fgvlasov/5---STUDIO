import ReactPlayer from "react-player";

const VideoPlayer = ({url}) => {
  return (
    <div
      className="modal fade video-player-modal"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content bg-transparent">
          <div className="modal-body p-0">
            <ReactPlayer
              url={url}
              width="100%"
              height="initial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
