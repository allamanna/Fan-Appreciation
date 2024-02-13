const apiUrl = '/.netlify/functions/enterContest';

function enterContest() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        displayResult(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        displayResult('An error occurred. Please try again.');
    });
}

