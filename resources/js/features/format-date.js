
// https://date-fns.org/v2.16.1/docs/format
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

let date = new Date("2020-10-05 18:20:56");

console.log(format(date, "dd MMM yyyy, HH:mm", {locale: fr}));
