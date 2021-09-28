import './App.css';
import useUrlState from '@ahooksjs/use-url-state';
import {BrowserRouter, Route} from "react-router-dom";

const Test = () => {
  const [state, setState] = useUrlState({ count: '1' });
    console.log(1222)
  return (
      <>
        <button
            style={{ marginRight: 8 }}
            type="button"
            onClick={() => setState({ count: Number(state.count || 0) + 1 })}
        >
          add
        </button>
        <button type="button" onClick={() => setState({ count: undefined })}>
          clear
        </button>
        <div>state: {state?.count}</div>
      </>
  );
}

const App = () => {
    return <BrowserRouter basename={'/'}>
        <Route path={'/'} component={Test} />
    </BrowserRouter>
}

export default App;
