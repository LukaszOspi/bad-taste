import { useReducer } from 'react';
import CastMember from './CastMember';
// import './CastList.css';

const reducer = (state, action) => {
  // switch (action.type) {
  //   case 'increment':
  //     return state + 1;
  //   case 'decrement':
  //     return state - 1;
  //   default:
  //     return state;
  // }
  const indexAction = {
    increment: () => state + 1,
    decrement: () => state - 1,
    default: () => state,
  };

  return (indexAction[action.type] || indexAction.default)();
};

const CastList = ({ mediaCredits }) => {
  const [index, dispatch] = useReducer(reducer, 0);

  return (
    <div className="cast">
      <h4 id="cast-title">Top Billed Cast: </h4>
      <div id="slide-show">
        {index === 0 ? (
          <button className="slide-show-button" disabled>{`<`}</button>
        ) : (
          <button
            className="slide-show-button"
            onClick={() => dispatch({ type: 'decrement' })}
          >{`<`}</button>
        )}
        <div className="cast-list">
          {mediaCredits.cast.map((c, i) =>
            i === index ? (
              <CastMember
                key={c.id}
                castPicture={c.profile_path}
                name={c.name}
                character={c.character}
              />
            ) : null
          )}
        </div>
        <button
          className="slide-show-button"
          onClick={() => dispatch({ type: 'increment' })}
        >{`>`}</button>
      </div>
    </div>
  );
};

export default CastList;
