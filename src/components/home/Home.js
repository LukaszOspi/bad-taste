import SearchContainer from './SearchContainer';

const Home = (props) => {
  const { setMediaList } = props;

  return (
    <div>
      <SearchContainer setMediaList={setMediaList} />
    </div>
  );
};

export default Home;
