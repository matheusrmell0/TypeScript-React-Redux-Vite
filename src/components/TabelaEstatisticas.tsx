import styles from './TabelaEstatisticas.module.css';
import { useSelector } from 'react-redux';
import Estatisticas from '../helper/classes/Estatisticas';

const TabelaEstatisticas = () => {
  const stats = useSelector(({ fetchAPI }: State) => fetchAPI?.data);
  const data = new Estatisticas(stats as Transacao[]);

  if (!data.payment) return null;
  if (!data.stats) return null;
  return (
    <section className={styles.stats}>
      <h1 className="title">Estatísticas</h1>
      <p>Total: {data.total}</p>
      <div className={styles.payment}>
        {Object.entries(data.payment).map((arr) => (
          <p key={arr[0]}>
            {arr[0]}: {arr[1]}
          </p>
        ))}
      </div>
      {Object.entries(data?.stats).map((arr) => (
        <p key={arr[0]}>
          {arr[0]}: {arr[1]}
        </p>
      ))}
      <p>Dia da semana com maior operação: {data.saleDay[0]} {data.saleDay[1]} vendas</p>
    </section>
  );
};

export default TabelaEstatisticas;
