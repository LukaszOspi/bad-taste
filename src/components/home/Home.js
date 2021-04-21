import { useEffect, useState } from 'react';
import SearchContainer from './SearchContainer';

const Home = (props) => {
  const { setMediaList, dropdownSearchValue, setDropdownSearchValue } = props;

  return (
    <div>
      <SearchContainer
        setMediaList={setMediaList}
        dropdownSearchValue={dropdownSearchValue}
        setDropdownSearchValue={setDropdownSearchValue}
      />
    </div>
  );
};

export default Home;
