# Jokes Web Application

This is a simple web application that fetches random "Jokes" from an API and displays them when a button is clicked.

### Technologies Used
- HTML

- CSS (stylesheets)

- JavaScript

### Installation

1. Clone the repository into your local machine using the following command:
```
https://github.com/davidomotoso/Api-Jokes.git
```

2. Open the HTML file ( Api Jokes.html ) in your preferred web browser.

### Usage

1. Open the Api Jokes.html file in a web browser.

2. You will see a button labeled "Random Jokes" on the screen.

3. Click the "Random Jokes" button.

4. The button text will change to "Please wait a sec..." indicating that the application is fetching a joke from the API.

5. Once the joke is fetched, it will be displayed on the screen in the designated output area.

6. You can click the "Random Jokes" button again to fetch another joke.

### Code Overview

The "Api Jokes.html" file contains the structure of the web page. It includes the necessary HTML elements, such as a button and a div to display the joke.

The Api Jokes.css file contains the styles for the web page.

The Api Jokes.js file contains the JavaScript code that fetches a random Daddy joke from the API and updates the output area with the joke text.

The JavaScript code listens for a click event on the button. When the button is clicked, it changes the button text to "Please wait a sec..." and calls the fetchJokes() function.

The fetchJokes() function performs an asynchronous fetch request to the API endpoint (https://icanhazdadjoke.com/) using the fetch() method. It sets the necessary headers to specify that it expects a JSON response.

Once the response is received, the data is converted to JSON format. The joke text is then extracted from the data and displayed in the output area.

### Note

Note
Please make sure you have an internet connection to fetch the jokes from the API.

Enjoy the jokes!
