// json2html.js
export default function json2html(data) {
  // Extract all unique keys for the table header
  const columns = Array.from(new Set(data.flatMap(Object.keys)));

  // Start building the HTML table string
  let html = '<table data-user="saitejakonam123@gmail.com">';
  html += '<thead><tr>';

  // Add table headers
  columns.forEach(column => {
    html += `<th>${column}</th>`;
  });
  html += '</tr></thead>';

  // Add table rows
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    columns.forEach(column => {
      html += `<td>${row[column] !== undefined ? row[column] : ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
