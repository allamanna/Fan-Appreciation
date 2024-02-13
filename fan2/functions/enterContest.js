exports.handler = async function (event, context) {
    try {
        const { name, email } = JSON.parse(event.body);

        // Simulate a win with a 20% chance
        const isWinner = Math.random() < 0.2;

        // Save entry
        const entry = { name: name, email: email, isWinner };

        // Respond with the result
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Adjust this header based on your CORS needs
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(isWinner ? { message: 'Congratulations! You\'re a winner!', entry } : { message: 'Sorry, you didn\'t win this time. Try again!', entry }),
        };

        return response;
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'An error occurred. Please try again.' }),
        };
    }
};
