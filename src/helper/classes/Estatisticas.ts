import filterValue from '../filterValue';
import countBy from '../countBy';

export default class Estatisticas {
  private transacoes: Transacao[];
  total;
  payment;
  stats;
  week;
  saleDay;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.totalValue();
    this.payment = this.paymentValue();
    this.stats = this.statsValue();
    this.week = this.setWeekSale();
    this.saleDay = this.setSaleDay();
  }
  totalValue() {
    if (this.transacoes)
      return this.transacoes
        .filter(filterValue)
        .reduce((acc, { valor }) => {
          return (valor += acc);
        }, 0)
        .toLocaleString('pt-BT', { style: 'currency', currency: 'BRL' });
  }
  private paymentValue() {
    if (this.transacoes)
      return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  private statsValue() {
    if (this.transacoes)
      return countBy(this.transacoes.map(({ status }) => status));
  }
  private setWeekSale() {
    const week = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sábado']: 0,
    };

    if (this.transacoes)
      this.transacoes.map(({ data }) => {
        if (data.getDay() === 0) return (week['Domingo'] += 1);
        if (data.getDay() === 1) return (week['Segunda'] += 1);
        if (data.getDay() === 2) return (week['Terça'] += 1);
        if (data.getDay() === 3) return (week['Quarta'] += 1);
        if (data.getDay() === 4) return (week['Quinta'] += 1);
        if (data.getDay() === 5) return (week['Sexta'] += 1);
        if (data.getDay() === 6) return (week['Sábado'] += 1);
      });

    return Object.entries(week);
  }
  private setSaleDay() {
   return this.week.sort((a, b) => {
      return b[1] - a[1]
    })[0];
  }
}
