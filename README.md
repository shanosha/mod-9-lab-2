# Character Counter

## Summary

A component that helps writers track their progress while writing. The component provides immediate feedback about the content length and estimated reading time, helping writers meet specific content requirements.

## Setup and Usage

- Clone the repository.

```
git clone https://github.com/shanosha/mod-9-lab-2.git
```

- Navigate to the directory.

```
cd mod-9-lab-2
```

- Install the node packages.

```
npm install
```

- Run the Vite development server.

```
npm run dev
```

- Open the server URL in a browser.

- Begin typing in the textarea and you will see live statistics display and update as you type.

## Reflections

How did you handle state updates when the text changed?

- I passed the updated value of the textarea to a callback function, that updated the state of the stats variable.

What considerations did you make when calculating reading time?

- I considered the formula that I wanted to use. I decided that I want to add one second to the reading time for every three words typed. I also did not want spaces to be concidered as words, so I trimmed the string and used regex to calculate the word count first.

How did you ensure the UI remained responsive during rapid text input?

- I used Tailwind to set the width of the text area to 100% of it's outer container, so that it sizes down automatically when the screen width decreases.

What challenges did you face when implementing the statistics calculations?

- One thing I had to account for was reformatting the reading time stat. I also wanted to pass the minimum and maximum text limits to the stats component, so that the values could be controlled by the main component, and individual stat styling could be adjusted based on different variables.
