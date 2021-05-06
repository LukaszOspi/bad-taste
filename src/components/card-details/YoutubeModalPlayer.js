import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import '../../index.css';

const YoutubeModalPlayer = ({ modalIsOpen, setModalIsOpen, youtubeKey, neonStyle }) => {
  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={modalIsOpen}
        videoId={youtubeKey}
        onClose={() => setModalIsOpen(false)}
      />
      <a href="#" className="neon-movie-button" onClick={() => setModalIsOpen(true)}>
        Play trailer
      </a>
    </div>
  );
};

export default YoutubeModalPlayer;
