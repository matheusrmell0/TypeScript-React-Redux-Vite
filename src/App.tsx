import TabelaDados from './components/TabelaDados';
import TabelaEstatisticas from './components/TabelaEstatisticas';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import Error from './components/Error';
import { fetchStats } from './reducer/fecthData';
import React from 'react';
import './App.css';

const App = () => {
  const state = useSelector((State: State) => State.fetchAPI);
  const dispatch: any = useDispatch();
  React.useEffect(() => {
    dispatch(fetchStats('https://api.origamid.dev/json/transacoes.json'));
  }, []);

  if (state?.error) return <Error error={state.error} />;
  if (state?.loading) return <Loading />;
  return (
    <>
      <main className="container">
        <TabelaEstatisticas />
        <TabelaDados />
      </main>
    </>
  );
};

export default App;
