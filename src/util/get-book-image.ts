const bookImagePrefix = `${import.meta.env.BASE_URL}/covers`;

export default function (bookId: number) {
  return `${bookImagePrefix}/${bookId}.png`;
}
