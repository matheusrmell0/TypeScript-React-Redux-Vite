declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
interface Data {
  data: null | Transacao[] | undefined;
  error: string | null;
  loading: boolean;
}

interface State {
  fetchAPI: Data | null;
}

type Status =
  | 'Paga'
  | 'Recusada pela operadora de cartão'
  | 'Aguardando pagamento'
  | 'Estornada';
type Pagamento = 'Boleto' | 'Cartão de Crédito';

interface TransacaoAPI {
  Status: Status;
  ID: number;
  Data: string;
  Nome: string;
  ['Forma de Pagamento']: Pagamento;
  Email: string;
  ['Valor (R$)']: string;
  ['Cliente Novo']: 1 | 0;
}

interface Transacao {
  status: Status;
  id: number;
  data: Date;
  nome: string;
  pagamento: Pagamento;
  email: string;
  moeda: string;
  valor: number | null;
  cliente: boolean;
}
