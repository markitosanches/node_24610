const urlParams = new URLSearchParams(window.location.search);
const ticker = urlParams.get('ticker');

// console.log(ticker)


fetch(`/data/${ticker}`)
.then(response => response.json())
.then(data => {
    // console.log(data);
    const container = document.getElementById('data-container');
    const timeSeries = data['Time Series (Daily)'];
    
    if(!timeSeries) {
        container.innerText = 'No data available for this ticker.';
        return;
    }
    const entries = Object.entries(timeSeries).slice(0, 5); // Get the latest 5 entries
    container.innerHTML = `
    <h2>Latest 5 Days Data for ${ticker.toUpperCase()}</h2>
    <ul>
        ${entries.map(([date, values]) => `
            <li>
                <strong>${date}</strong>: Open: ${values['1. open']}, High: ${values['2. high']}, Low: ${values['3. low']}, Close: ${values['4. close']}, Volume: ${values['5. volume']}
            </li>
        `).join('')}
    </ul>`
})
.catch(error => {
    document.getElementById('data-container').innerText = 'Error fetching data';
    console.error('Error fetching data:', error);
});