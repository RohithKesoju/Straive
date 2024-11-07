// json2html.js

export default function json2html(data) {
    // Start the table with a data-user attribute
    let html = '<table data-user="rohithadams574@gmail.com">';
  
    // Add the table header
    html += '<thead><tr>';
    
    // Get the headers from the keys of the first object in the data array
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
  
    html += '</tr></thead><tbody>';
  
    // Loop through the array of objects and add table rows
    data.forEach(item => {
      html += '<tr>';
      headers.forEach(header => {
        html += `<td>${item[header] || ''}</td>`; // Handle missing values gracefully
      });
      html += '</tr>';
    });
  
    // Close the table
    html += '</tbody></table>';
  
    return html;
  }
  