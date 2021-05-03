import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Media from './Media';
import './Media.css';
import '../../index.css';
import fetchDetailsTMDB from '../../services/fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/fetch/fetchCreditsTMDB';
import fetchStreamingProvidersTMDB from '../../services/fetch/fetchStreamingProvidersTMDB';
import MediaContext from '../../context';

const MediaList = ({ swipedMedia, dispatchSwipedMedia }) => {
  const { dispatchAppState } = useContext(MediaContext);
  const history = useHistory();

  const handleInfo = async (mediaId, mediaType) => {
    await dispatchAppState({
      type: 'fetch-details',
      payload: {
        credits: await fetchCreditsTMDB(mediaId, mediaType),
        details: await fetchDetailsTMDB(mediaId, mediaType),
        streaming: await fetchStreamingProvidersTMDB(mediaId, mediaType),
      },
    });
    history.push('/card-details');
  };

  return (
    <div className="media-list">
      {swipedMedia.liked.map((element, index) => {
        return (
          <Media
            key={index}
            img={element.poster_path}
            title={element.original_title}
            year={element.release_date}
            info={() =>
              handleInfo(element.id, element.original_title ? 'movie' : 'tv')
            }
            remove={() => dispatchSwipedMedia({ type: 'remove', index: index })}
          />
        );
      })}
    </div>
  );
};

export default MediaList;
