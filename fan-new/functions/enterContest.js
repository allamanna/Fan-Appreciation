// functions/enterContest.js

exports.handler = async function (event, context) {
    try {
        const { name, email } = JSON.parse(event.body);

        // Simulate a win with a 20% chance
        const isWinner = Math.random() < 0.2;

        // Save entry
        const entry = { name: name, email: email, isWinner };

        // You can store entries in a database or another persistent storage
        // In this example, entries are not stored permanently, and will be lost between function executions

        // Respond with the result
        if (isWinner) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Congratulations! You\'re a winner!', entry }),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Sorry, you didn\'t win this time. Try again!', entry }),
            };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'An error occurred. Please try again.' }),
        };
    }
};
