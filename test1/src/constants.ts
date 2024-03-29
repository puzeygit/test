export type CardContent = {
  header: string;
  options: string[];
  text: string;
}

export const cards: CardContent[] = [
  {
    header: "Заголовок 1 asldm,la,sd asld,la,sd asdmalsdmlka askxoaksx",
    options: ["элемент", 'qweqweqweqwe', 'asd', 'asd', 'asd', 'asd'],
    text: "какой-то текст kok kokok k okok kk okok kok okok okok okok oko kok ok kkok ookok okok okok okokok ",
  },
  {
    header: "Заголовок 2",
    options: ["элемент списка 4", "элемент списка 5", "элемент списка 6", 'sadasdsas'],
    text: "какой-то текст 2 текст какой-то 2 какой-то",
  },
  {
    header: "Заголовок 3",
    options: ["элемент списка 7", "элемент списка 8", "элемент списка 9"],
    text: "какой-то текст 3 текст какой-то 3 какой-то",
  },
  {
    header: "Заголовок 4",
    options: ["элемент списка 10", "элемент списка 11", "элемент списка 12"],
    text: "какой-то текст 4 текст какой-то 4 какой-то",
  },
  {
    header: "Заголовок 5",
    options: ["элемент списка 13", "элемент списка 14", "элемент списка 15"],
    text: "какой-то текст 5 текст какой-то 5 какой-то",
  },
  {
    header: "Заголовок 6",
    options: ["элемент списка 16", "элемент списка 17", "элемент списка 18"],
    text: "какой-то текст 6 текст какой-то 6 какой-то",
  },
  {
    header: "Заголовок 7",
    options: ["элемент списка 19", "элемент списка 20", "элемент списка 21"],
    text: "какой-то текст 7 текст какой-то 7 какой-то",
  },
  {
    header: "Заголовок 8",
    options: ["элемент списка 22", "элемент списка 23", "элемент списка 24"],
    text: "какой-то текст 8 текст какой-то 8 какой-то",
  },
  {
    header: "Заголовок 9",
    options: ["элемент списка 25", "элемент списка 26", "элемент списка 27"],
    text: "какой-то текст 9 текст какой-то 9 какой-то",
  },
  {
    header: "Заголовок 10",
    options: ["элемент списка 28", "элемент списка 29", "элемент списка 30"],
    text: "какой-то текст 10 текст какой-то 10 какой-то",
  },
];

type GenerateId = () => string;
export const generateId: GenerateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

