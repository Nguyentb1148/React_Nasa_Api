# NASA React App

This project demonstrates how to interact with the NASA API (specifically the Astronomy Picture of the Day - APOD) using React. It showcases how to fetch data from an external API, manage the state with React hooks (`useState`, `useEffect`), and display it on a webpage. Additionally, it includes functionality to select and view NASA's APOD for any date.

## Features:
- Fetches and displays NASA's Astronomy Picture of the Day (APOD).
- Allows the user to select a specific date to view the image and explanation for that day.
- Data is cached in the browser's `localStorage` for better performance.
- Uses React Hooks to manage state and side effects.

## How to Set Up:

### Step 1: Clone the repository
First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/nasa-react-app.git
cd nasa-react-app
```

### Step 2: Create a `.env` file
The project requires an API key from NASA to fetch the data. Follow these steps to create the `.env` file:

1. Visit the NASA API website: [https://api.nasa.gov/](https://api.nasa.gov/).
2. Sign up for a free API key.
3. Once you have the API key, create a `.env` file in the root of your project.
4. Add the following line to the `.env` file, replacing `YOUR_NASA_API_KEY` with your actual API key:

```
REACT_APP_NASA_API_KEY=YOUR_NASA_API_KEY
```

### Step 3: Create a `.gitignore` file
To ensure your `.env` file is not tracked by Git, create a `.gitignore` file in the root of your project (if it doesn't already exist) and add the following line:

```
.env
```

This will keep your sensitive API key from being pushed to a public repository.

### Step 4: Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

### Step 5: Start the App
Run the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## How it Works:

1. **Date Selection**: The app allows the user to select any date using an input date picker. It then fetches the Astronomy Picture of the Day (APOD) for that specific date from the NASA API.

2. **Data Caching**: To optimize performance, the app stores the fetched data in `localStorage` for the current day. This prevents unnecessary API calls if the data is already available in the cache.

3. **Displaying APOD**: The app displays the image, title, and explanation for the Astronomy Picture of the Day (APOD).

## Dependencies:
- React
- Fetch API (for HTTP requests)
- Font Awesome (for the loading icon)

## Links:
- NASA API: [https://api.nasa.gov/](https://api.nasa.gov/)

