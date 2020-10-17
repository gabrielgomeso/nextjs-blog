import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt';

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  const formattedDate = format(
    date,
    "'Dia' dd 'de' MMMM' de 'yyyy",
    { locale: pt }
);
  return <time dateTime={dateString}>{formattedDate}</time>
}