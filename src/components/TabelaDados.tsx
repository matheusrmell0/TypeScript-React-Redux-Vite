import { useSelector } from 'react-redux';
import styles from './TabelaDados.module.css';
import filterValue from '../helper/filterValue';

const TabelaDados = () => {
  const stats = useSelector(({ fetchAPI }: State) => fetchAPI?.data);

  return (
    <>
      <section className={styles.tabela}>
        <h1 className="title">Dados</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Compra</th>
              <th>Pagamento</th>
              <th>Status</th>
            </tr>
          </thead>
          {stats?.map((item) => (
            <tbody key={item?.nome}>
              <tr>
                <td>{item?.nome}</td>
                <td>{item?.email}</td>
                <td
                  style={
                    filterValue(item) && item?.valor < 0
                      ? { color: 'red', textDecoration: 'line-through' }
                      : undefined
                  }
                >
                  {item?.valor?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td>{item?.pagamento}</td>
                <td>{item?.status}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </>
  );
};

export default TabelaDados;
