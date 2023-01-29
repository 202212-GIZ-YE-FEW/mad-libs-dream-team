/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  // Your code here.
  // console.log(rawStory);
  const words = rawStory.split(" "); //get each word stored individually in an array
  const returnArray = []; //will add stuff to it
  // console.log(words);
  words.map((word) => {
    /*
      ToDo: 
      1- Add Regex to words
      2- Specify which words end in [x] format
      3- Add parsed word to returnArray
      4- Keep code clean
    */
  });

  return returnArray; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
    /*
      ToDo:
      1- Build the 2 Divs: Edit div and Preview div
      2- If word/wordObject has [x], build an input for it 
      2.5 related functions to inputs (event listener, live changes, when pressed enter)
      3- Input has maxLength, placeHolder, and tabIndex maybe?
      4- all inputs in the preview set to readOnly
    */
  });
