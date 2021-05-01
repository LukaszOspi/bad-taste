import SearchOptions from './SearchOptions';
import './SearchOptionsList.css';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import MediaContext from '../../context';
import keyLegend from '../../services/keyLegend';
import '../../index.css';

const SearchOptionsList = () => {
  const history = useHistory();
  const { appState, dispatchAppState } = useContext(MediaContext);

  return (
    <div className="search-options-List">
      {appState.options &&
        appState.options.map((option, index) => {
          return (
            <div
              onClick={() => {
                dispatchAppState({
                  type: 'get-title',
                  payload: {
                    title: option[keyLegend[appState.mediaType]['title']],
                    id: option.id,
                  },
                });
                history.push('/card-page');
              }}
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
