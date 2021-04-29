import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "../../index.css";

const YoutubeModalPlayer = ({ modalIsOpen, setModalIsOpen, youtubeKey }) => {
  return (
    <div>
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={modalIsOpen}
          videoId={youtubeKey}
          onClose={() => setModalIsOpen(false)}
        />
        <button onClick={() => setModalIsOpen(true)}>Play trailer</button>
      </div>
    </div>
  );
};

export default YoutubeModalPlayer;
