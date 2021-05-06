import SearchOptions from './SearchOptions';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import MediaContext from '../../context';
import keyLegend from '../../services/keyLegend';
import '../../index.css';

const SearchOptionsList = ({ swipedMedia, dispatchSwipedMedia }) => {
  const history = useHistory();
  const { appState, dispatchAppState } = useContext(MediaContext);

  const findIndex = (array, id, type) => {
    if (array[0].id === '') {
      return 0;
    }
    const index = array.findIndex((e) => e.id === id && e.type === type);
    return index === -1 ? array.length : index;
  };

  const findMedia = (array, id, type) => {
    const index = array.findIndex((e) => e.id === id && e.type === type);
    return index === -1 ? false : true;
  };

  const handleClick = (element, array) => {
    const index = findIndex(array, element.id, appState.mediaType);
    dispatchAppState({
      type: 'get-title',
      index: index,
      displayIndex:
        array[index]?.id === '' ||
        !findMedia(array, element.id, appState.mediaType)
          ? 0
          : array[index].displayIndex,
      payload: {
        title: element[keyLegend[appState.mediaType]['title']],
        id: element.id,
      },
    });
    if (array[index]?.id === '' || index === array.length) {
      dispatchSwipedMedia({
        type: 'new',
        title: element[keyLegend[appState.mediaType]['title']],
        id: element.id,
        mediaType: appState.mediaType,
        arrIndex: index,
      });
    }
    history.push('/card-page');
  };

  return (
    <div className="search-options-list">
      {appState.options &&
        appState.options.map((option, index) => {
          return (
            <div
              onClick={() => handleClick(option, swipedMedia)}
              key={index}
              tabIndex="0"
            >
              <SearchOptions
                poster={option[keyLegend[appState.mediaType]['poster']]}
                title={option[keyLegend[appState.mediaType]['title']]}
                year={option[keyLegend[appState.mediaType]['date']]}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchOptionsList;
