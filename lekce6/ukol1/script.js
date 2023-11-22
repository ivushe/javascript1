
const datum =prompt("Zadejte datum:")

function parseDate(datum) {
    const datumTrim = datum.trim();
    const day = +datumTrim.slice(0, 2);
    const month = +datumTrim.slice(3, 5);
    const year = +datumTrim.slice(6);
  

  
    return { day, month, year };
  }
  const parsedDate = parseDate(datum);

  document.body.innerHTML = `
  <h2>Datum</h2>
  <p>den: ${parsedDate.day}</p>
  <p>mesic: ${parsedDate.month}</p>
  <p>rok: ${parsedDate.year}</p>
`;