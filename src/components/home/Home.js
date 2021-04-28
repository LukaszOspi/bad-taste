import FilterButton from './FilterButton';
import SearchContainer from './SearchContainer';

const Home = ({
  setMediaList,
  dropdownSearchValue,
  setDropdownSearchValue,
}) => {
  return (
    <div>
      <FilterButton />
      <SearchContainer
        setMediaList={setMediaList}
        dropdownSearchValue={dropdownSearchValue}
        setDropdownSearchValue={setDropdownSearchValue}
      />
    </div>
  );
};

export default Home;
