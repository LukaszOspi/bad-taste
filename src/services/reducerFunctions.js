const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'initialize':
      return {
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
        mediaType: state.mediaType,
        swipedListIndex: '',
      };
    case 'loading':
      return {
        ...state,
        display: false,
        dropdownSearchValue: {
          title: '',
          id: '',
        },
        isLoading: true,
        options: [],
      };
    case 'reset-options':
      return {
        ...state,
        display: false,
        dropdownSearchValue: {
          title: '',
          id: '',
        },
        isLoading: false,
        options: [],
      };
    case 'get-title':
      return {
        ...state,
        display: false,
        displayIndex: action.displayIndex,
        dropdownSearchValue: action.payload,
        swipedListIndex: action.index,
      };
    case 'fetch-dropdown-options':
      return {
        ...state,
        display: true,
        isLoading: false,
        options: action.payload,
      };
    case 'change-media-type':
      return {
        ...state,
        display: false,
        dropdownSearchValue: {
          title: '',
          id: '',
        },
        isLoading: action.loading,
        mediaType: action.payload,
        options: [],
      };
    case 'fetch-media-list':
      return { ...state, mediaList: action.payload };
    case 'increase-display-index':
      return { ...state, displayIndex: state.displayIndex + 1 };
    case 'update-media-list':
      return {
        ...state,
        mediaList: [...state.mediaList, ...action.payload],
        displayIndex: state.displayIndex + 1,
      };
    case 'fetch-details':
      return {
        ...state,
        mediaCredits: action.payload.credits,
        mediaDetails: action.payload.details,
        streamingProvidersList: action.payload.streaming,
      };
    default:
      return state;
  }
};

const likeHandler = (state, action) => {
  const currentState = [...state];
  switch (action.type) {
    case 'initialize':
      return [
        {
          mediaTitle: '',
          id: '',
          type: '',
          displayIndex: 0,
          liked: [],
          disliked: [],
        },
      ];
    case 'new':
      currentState[action.arrIndex] = {
        mediaTitle: action.title,
        id: action.id,
        type: action.mediaType,
        displayIndex: 0,
        liked: [],
        disliked: [],
      };
      return currentState;
    case 'like':
      currentState[action.arrIndex] = {
        ...currentState[action.arrIndex],
        displayIndex: currentState[action.arrIndex].displayIndex + 1,
        liked: [...currentState[action.arrIndex].liked, action.payload],
      };
      return currentState;
    case 'dislike':
      currentState[action.arrIndex] = {
        ...currentState[action.arrIndex],
        displayIndex: currentState[action.arrIndex].displayIndex + 1,
        disliked: [...currentState[action.arrIndex].disliked, action.payload],
      };
      return currentState;
    case 'remove-list':
      currentState.splice(action.arrIndex, 1);
      return currentState;
    case 'remove-item':
      const newLikedList = currentState[action.arrIndex].liked.filter(
        (e) => action.id !== e.id
      );
      currentState[action.arrIndex] = {
        ...currentState[action.arrIndex],
        liked: [...newLikedList],
      };
      return currentState;
    default:
      return state;
  }
};

export { appStateReducer, likeHandler };
