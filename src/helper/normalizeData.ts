import checkInterface from './typeProtection';
import valueToCoin from './valueToCoin';
import setDate from './setDate';

const normalizeData = (data: TransacaoAPI): Transacao | undefined => {
  if (data && checkInterface(data))
    return {
      status: data.Status,
      id: data.ID,
      data: setDate(data.Data),
      nome: data.Nome,
      pagamento: data['Forma de Pagamento'],
      email: data.Email,
      valor: valueToCoin(data['Valor (R$)']),
      moeda: data['Valor (R$)'],
      cliente: data['Cliente Novo'] === 1 ? true : false,
    };
};

export default normalizeData;
