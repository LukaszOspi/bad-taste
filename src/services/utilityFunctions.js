const getUniqueListByKey = (arr, key) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};

const likeHandler = (state, action) => {
  switch (action.type) {
    case 'like':
      return { ...state, liked: [...state.liked, action.payload] };
    case 'dislike':
      return { ...state, disliked: [...state.disliked, action.payload] };
    case 'remove':
      return {
        ...state,
        liked: [
          ...state.liked.slice(0, action.index),
          ...state.liked.slice(action.index + 1),
        ],
      };
    default:
      return state;
  }
};

export { getUniqueListByKey, likeHandler };

// const [state, dispatch] = useReducer(reducer, initialStatealue)

// dispatch({type: 'like', payload: 'blablabla'})
