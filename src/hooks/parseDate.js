const dayearString = [
  "перше",
  "друге",
  "третє",
  "четверте",
  "пяте",
  "шосте",
  "сьоме",
  "восьме",
  "девяте",
  "десяте",
  "одинадцяте",
  "дванадцяте",
  "тринадцяте",
  "чотирнадцяте",
  "пятнадцяте",
  "шістнадцяте",
  "сімнадцяте",
  "вівсімнадцяте",
  "девятнадцяте",
  "двадцяте",
  "дведцять перше",
  "двадцять друге",
  "двадцять третє",
  "двадцять четверте",
  "двадцять пяте",
  "двадцять шосте",
  "двадцять сьоме",
  "двадцять восьме",
  "двадцять девяте",
  "тридцяте",
  "тридцять перше",
];
const months = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];
const tens = [
  "",
  "десять",
  "двадцять",
  "тридцять",
  "сорок",
  "пятдесят",
  "шістдесят",
  "сімдесят",
  "вісімдесят",
  "девяносто",
];
const hundreds = [
  "",
  "сто",
  "двісті",
  "триста",
  "чотириста",
  "пятсот",
  "шістсот",
  "сімсот",
  "вісімсот",
  "девятсот",
];
const thousands = [
  "",
  "одна тисяча",
  "дві тисячі",
  "три тисячі",
  "чотири тисячі",
  "пять тисяч",
  "шість тисяч",
  "сім тисяч",
  "вісім тисяч",
  "девять тисяч",
];
const numbersOrdinal = [
  "",
  "перший",
  "другий",
  "третій",
  "четвертий",
  "пятий",
  "шостий",
  "сьомий",
  "восьмий",
  "девятий",
];
const tensOrdinal = [
  "",
  "десятий",
  "двадцятий",
  "тридцятий",
  "сороковий",
  "пятдесятий",
  "шістдесятий",
  "сімдесятий",
  "вісімдесятий",
  "девяностий",
];
const hundredsOrdinal = [
  "",
  "сотий",
  "двухсотий",
  "трьохсотий",
  "чотирьохсотий",
  "пятьсотий",
  "шістсотий",
  "сімсотий",
  "вісімсотий",
  "девятсотий",
];
const thousandsOrdinal = [
  "",
  "тисячний",
  "двухтисячний",
  "трьохтисячний",
  "чотирьохтисячний",
  "пятитисячний",
  "шеститисячний",
  "семитисячний",
  "восьмитисячний",
  "девятитисячний",
];
const tensSpecial = [
  "",
  "одинадцятий",
  "дванадцятий",
  "тринадцятий",
  "чотирнадцятий",
  "пятнадцятий",
  "шістнадцятий",
  "сімнадцятий",
  "вісімнадцятий",
  "девятнадцятий",
];

export const parseDate = (inputDate, resDate) => {
  const parsedDate = inputDate.value.match(/[0-9]+/g);

  const dayNumber = +parsedDate[0];
  const mounthNumber = +parsedDate[1];
  const yearNumber = +parsedDate[2];

  const isSpecial = (year) => +year >= 11 && +year <= 19;

  const convertNumber = (yearString) => numbersOrdinal[+yearString];

  const convertTens = (yearString) => {
    if (yearString[0] === "0") return convertNumber(yearString.slice(1));
    const year = +yearString
    yearString = year.toString();
    if (year % 10 === 0) return tensOrdinal[yearString[0]];
    else if (isSpecial(year)) return tensSpecial[yearString[1]];
    else return tens[yearString[0]] + " " + numbersOrdinal[yearString[1]];
  };
  const conversHundrets = (yearString) => {
    if (yearString[0] === "0") return convertTens(yearString.slice(1));
    const year = +yearString
    yearString = year.toString()
    if (year % 100 === 0) return hundredsOrdinal[yearString[0]];
    else
      return hundreds[yearString[0]] + " " + convertTens(yearString.slice(1));
  };
  const convertThousands = (yearString) => {
    if (yearString[0] === "0") return conversHundrets(yearString.slice(1));
    const year = +yearString;
    yearString = year.toString();
    if (year % 1000 === 0) return thousandsOrdinal[yearString[0]];
    else
      return (
        thousands[yearString[0]] + " " + conversHundrets(yearString.slice(1))
      );
  };
  const convertYear = (year) => {
    const yearString = yearNumber.toString();

    if (year <= 9) return numbersOrdinal[year];
    else if (year <= 99) return convertTens(yearString);
    else if (year <= 999) return conversHundrets(yearString);
    else if (year <= 9999) return convertThousands(yearString);
  };

  const day = dayearString[dayNumber - 1];
  const mounth = months[mounthNumber - 1];
  let year = convertYear(yearNumber);

  let outDate =
    day && mounth && year
      ? day + " " + mounth + " " + year + " рік."
      : "введено не коректну дату.";

  resDate.value = outDate;
};
