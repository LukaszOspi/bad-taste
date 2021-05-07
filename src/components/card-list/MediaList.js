import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Media from './Media';
import './Media.css';
import fetchDetailsTMDB from '../../services/fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/fetch/fetchCreditsTMDB';
import fetchStreamingProvidersTMDB from '../../services/fetch/fetchStreamingProvidersTMDB';
import MediaContext from '../../context';
import keyLegend from '../../services/keyLegend';

const MediaList = ({
  likedMedia,
  dispatchSwipedMedia,
  arrIndex,
  mediaType,
}) => {
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
      {likedMedia.liked.map((element, index) => {
        return (
          <Media
            key={`${element.id}-${index}`}
            img={element[keyLegend[mediaType].poster]}
            title={element[keyLegend[mediaType].title]}
            info={() => handleInfo(element.id, likedMedia.type)}
            remove={() =>
              dispatchSwipedMedia({
                type: 'remove-item',
                id: element.id,
                arrIndex: arrIndex,
              })
            }
          />
        );
      })}
    </div>
  );
};

export default MediaList;
