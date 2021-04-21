import { withRouter, useEffect } from 'react-router-dom';
import './ButtonRedirect.css';
// this also works with react-router-native

const ButtonRedirect = withRouter(({ history }) => (
  <button
    type="button"
    className="button"
    onClick={() => history.push('/card-page')}
  >
    This one!
  </button>
));

export default ButtonRedirect;
