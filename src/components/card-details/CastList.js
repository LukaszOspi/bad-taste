import { useReducer, useMemo } from 'react';
import CastMember from './CastMember';
import '../../index.css';
import './CastList.css';

const reducer = (state, action) => {
  const indexAction = {
    increment: () => state + 1,
    decrement: () => state - 1,
    default: () => state,
  };

  return (indexAction[action.type] || indexAction.default)();
};

const CastList = ({ mediaCredits }) => {
  const [index, dispatch] = useReducer(reducer, 0);

  const filteredCastList = useMemo(
    () => mediaCredits.cast.filter((a) => a.profile_path),
    [mediaCredits]
  );

  return (
    <div className="cast">
      <h4 id="cast-title">Top Billed Cast: </h4>
      <div id="slide-show">
        {index === 0 ? (
          <button className="button" disabled>{`<`}</button>
        ) : (
          <button
            className="button"
            onClick={() => dispatch({ type: 'decrement' })}
          >{`<`}</button>
        )}
        <div className="cast-list">
          {filteredCastList.map((c, i) => (
            <div className={i === index ? 'visible' : 'not-visible'}>
              <CastMember
                key={c.id}
                castPicture={c.profile_path}
                name={c.name}
                character={c.character}
              />
            </div>
          ))}
        </div>
        {index === filteredCastList.length - 1 ? (
          <button className="button" disabled>{`<`}</button>
        ) : (
          <button
            className="button"
            onClick={() => dispatch({ type: 'increment' })}
          >{`>`}</button>
        )}
      </div>
    </div>
  );
};

export default CastList;
