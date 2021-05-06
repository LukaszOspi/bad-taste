import { useReducer, useEffect } from 'react';
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
import zebra from './assets/zebra-background-1980.jpg';
import leopard from './assets/leopard2-purple.jpg';

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
  mediaType: '',
  swipedListIndex: '',
};

const swipedMediaInitializer = [
  {
    mediaTitle: '',
    id: '',
    type: '',
    displayIndex: 0,
    liked: [],
    disliked: [],
  },
];

function App() {
  const history = useHistory();
  const [appState, dispatchAppState] = useReducer(
    appStateReducer,
    appStateInitializer
  );
  const [swipedMedia, dispatchSwipedMedia] = useReducer(
    likeHandler,
    localStorage.getItem('swipedMedia')
      ? JSON.parse(localStorage.getItem('swipedMedia'))
      : swipedMediaInitializer
  );

  useEffect(() => {
    localStorage.setItem('swipedMedia', JSON.stringify(swipedMedia));
  }, [swipedMedia]);

  useEffect(() => {
    if (appState.mediaType === 'movie') {
      document.body.style.backgroundImage = `url(${zebra})`;
      document.body.style.backgroundColor = '';
    }
    if (appState.mediaType === 'tv') {
      document.body.style.backgroundImage = `url(${leopard})`;
      document.body.style.backgroundColor = '';
    }
    if (!appState.mediaType) {
      document.body.style.backgroundImage = `url()`;
      document.body.style.backgroundColor = 'black';
    }
  }, [appState.mediaType]);

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
              <Home
                swipedMedia={swipedMedia}
                dispatchSwipedMedia={dispatchSwipedMedia}
              />
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
