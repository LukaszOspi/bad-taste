import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const YoutubeModalPlayer = ({ modalIsOpen, setModalIsOpen, youtubeKey }) => {
  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={modalIsOpen}
        videoId={youtubeKey}
        onClose={() => setModalIsOpen(false)}
      />
      <button
        className="neon-movie-button"
        onClick={() => setModalIsOpen(true)}
      >
        Play trailer
      </button>
    </div>
  );
};

export default YoutubeModalPlayer;
