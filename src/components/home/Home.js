import { useState } from 'react';
import FilterButton from './FilterButton';
import SearchContainer from './SearchContainer';
import '../../index.css';

const Home = ({ swipedMedia, dispatchSwipedMedia }) => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <FilterButton search={search} swipedMedia={swipedMedia} />
      <SearchContainer
        search={search}
        setSearch={setSearch}
        swipedMedia={swipedMedia}
        dispatchSwipedMedia={dispatchSwipedMedia}
      />
    </div>
  );
};

export default Home;
