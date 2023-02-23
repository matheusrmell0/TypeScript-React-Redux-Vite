type TransacaoValue = Transacao & { valor: number };
export default function filterValue(value: Transacao): value is TransacaoValue{
  return value.valor !== null
}