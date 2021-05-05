import { useContext } from 'react';
import MediaContext from '../../context';

const LikeButton = ({
  action,
  type,
  image,
  dispatchSwipedMedia,
  fetchNewRecommendations,
}) => {
  const { appState, dispatchAppState } = useContext(MediaContext);

  const handleDislike = () => {
    dispatchSwipedMedia({
      type: 'dislike',
      payload: appState.mediaList[appState.displayIndex],
      arrIndex: appState.swipedListIndex,
      id: appState.dropdownSearchValue.id,
      mediaType: appState.mediaType,
      title: appState.dropdownSearchValue.title,
    });
    dispatchAppState({ type: 'increase-display-index' });
  };

  const handleLike = async () => {
    dispatchSwipedMedia({
      type: 'like',
      payload: appState.mediaList[appState.displayIndex],
      arrIndex: appState.swipedListIndex,
      id: appState.dropdownSearchValue.id,
      mediaType: appState.mediaType,
      title: appState.dropdownSearchValue.title,
    });
    dispatchAppState({
      type: 'update-media-list',
      payload: await fetchNewRecommendations(
        appState.mediaList[appState.displayIndex].id,
        appState.mediaType,
        appState.mediaList
      ),
    });
  };

  const handleClick = (action) => {
    if (action === 'dislike') {
      handleDislike();
    }
    if (action === 'like') {
      handleLike();
    }
  };

  return (
    <div className={`${type}-button`}>
      <img
        className={`${type}-like-button`}
        alt={action}
        src={image}
        onClick={() => handleClick(action)}
      />
    </div>
  );
};

export default LikeButton;
