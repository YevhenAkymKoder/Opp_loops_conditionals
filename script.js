// Declare a boolean variable named condition and set its initial value to true or false
let condition = true;

// Declare an array named smileys and populate it with at least five different smiley strings
const smileys = ['😀', '😃', '😄', '😁', '😆'];

// Create an if-else conditional statement that checks the value of the condition variable
if (condition) {
    // Get the div element from the HTML
    const smileysContainer = document.getElementById('smileysContainer');

    // Inside the if block (where the condition is true), write a for loop that iterates over the smileys array
    for (let i = 0; i < smileys.length; i++) {
        // Inside the for loop, use document.createElement to create a new p (paragraph) element for each smiley
        const p = document.createElement('p');

        // Set the textContent of each p element to be the current smiley in the loop
        p.textContent = smileys[i];

        // Make the smileys clickable to copy to clipboard (bonus)
        p.addEventListener('click', () => {
            navigator.clipboard.writeText(p.textContent)
                .then(() => {
                    console.log(`Copied ${p.textContent} to clipboard`);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });

        // Append each p element to a div in the HTML
        smileysContainer.appendChild(p);
    }
} else {
    // Inside the else block (where the condition is false), log a message to the console saying "Condition not met"
    console.log('Condition not met');
}
