import { useReducer } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { appStateReducer, likeHandler } from './services/utilityFunctions';
import logo from './assets/mouth-3.png';
import './App.css';
import ScrollToTop from './services/ScrollToTop';
import Home from './components/home/Home';
import CardPage from './components/card-page/CardPage';
import CardDetails from './components/card-details/CardDetails';
import CardList from './components/card-list/CardList';
import MediaContext from './context';

const appStateInitializer = {
  isLoading: false,
  showDropdown: false,
  display: false,
  dropdownSearchValue: {
    title: '',
    id: '',
  },
  options: [],
  mediaList: [],
  displayIndex: 0,
  streamingProvidersList: undefined,
  mediaDetails: undefined,
  mediaCredits: undefined,
  mediaType: 'movie',
};

function App() {
  const history = useHistory();
  const [appState, dispatchAppState] = useReducer(
    appStateReducer,
    appStateInitializer
  );
  const [swipedMedia, dispatchSwipedMedia] = useReducer(likeHandler, {
    liked: [],
    disliked: [],
  });

  return (
    <div className="App">
      <MediaContext.Provider value={{ appState, dispatchAppState }}>
        <ScrollToTop>
          <header className="App-header">
            <nav>
              <img
                id="logo"
                alt="logo"
                src={logo}
                onClick={() => {
                  history.push('/');
                  dispatchAppState({ type: 'initialize' });
                }}
              />
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Home swipedMedia={swipedMedia} />
            </Route>
            <Route path="/card-page">
              <CardPage
                dispatchSwipedMedia={dispatchSwipedMedia}
                swipedMedia={swipedMedia}
              />
            </Route>
            <Route path="/card-details">
              <CardDetails />
            </Route>
            <Route path="/card-list">
              <CardList
                swipedMedia={swipedMedia}
                dispatchSwipedMedia={dispatchSwipedMedia}
              />
            </Route>
          </Switch>
        </ScrollToTop>
      </MediaContext.Provider>
    </div>
  );
}

export default App;
