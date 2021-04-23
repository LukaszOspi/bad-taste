import { useReducer } from 'react';
import CastMember from './CardMember';
import './CastList.css';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const CastList = ({ mediaCredits }) => {
  const [index, dispatch] = useReducer(reducer, 0);

  return (
    <div className="cast">
      {index > 0 && (
        <button onClick={() => dispatch({ type: DECREMENT })}>{`<`}</button>
      )}
      <div className="cast-list">
        {mediaCredits.cast.map((c, i) =>
          i >= index && i <= index + 6 ? (
            <CastMember
              castPicture={c.profile_path}
              name={c.name}
              character={c.character}
            />
          ) : null
        )}
      </div>
      <button onClick={() => dispatch({ type: INCREMENT })}>{`>`}</button>
    </div>
  );
};

export default CastList;
