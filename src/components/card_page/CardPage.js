import Header from './Header';
import SwipeContainer from './SwipeContainer';

const CardPage = (props) => {
  const { mediaList, mediaDetails, setMediaDetails } = props;

  return (
    <div className="card-page">
      <Header />
      <SwipeContainer
        mediaList={mediaList}
        mediaDetails={mediaDetails}
        setMediaDetails={setMediaDetails}
      />
    </div>
  );
};

export default CardPage;
