import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Media from './Media';
import './Media.css';
import '../../index.css';
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
            key={index}
            img={element[keyLegend[mediaType].poster]}
            title={element[keyLegend[mediaType].title]}
            year={element[keyLegend[mediaType].date]}
            info={() => handleInfo(element.id, mediaType)}
            remove={() =>
              dispatchSwipedMedia({
                type: 'remove',
                index: index,
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
