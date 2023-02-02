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
  let arr = rawStory.split(" ");
  let newArr = arr.map(
    (ele) => {
    if (ele.includes("[")) { // if it contains [
      let pos;
      let index = ele.indexOf("[");
      let word = ele.slice(0, index); // take the word
      let regex = ele.match(/\[(.*?)\]/)[1];//take the character inside the square //Dot . =>match any character except newlines     Quantifier * => Match 0 or more of the preceding token.  Lazy ? =>Makes the preceding quantifier lazy, causing it to match as few characters as possible.
      if (regex === "v") {
        pos = "verb";
      } else if (regex === "n") {
        pos = "noun";
      } else if (regex === "o") {
        pos = "object";
      } else if (regex === "a") {
        pos = "adjective";
      }
      return { word: word, pos: pos };
    } else {
      return { word: ele };
    }
  }
  )
  ;
  return newArr; // new array 
}

// instead of every part of speach we will place an input specifing the placeholder 
function buildStory(processedStory) {
  const madLibsEdit = document.querySelector(".madLibsEdit");
  const madLibsPreview = document.querySelector(".madLibsPreview");

  const editParagraph = document.createElement("p");
  const previewParagraph = document.createElement("p");

  madLibsEdit.appendChild(editParagraph);
  madLibsPreview.appendChild(previewParagraph);
  // pass through every object inside the array
  for (let word of processedStory) {
    // if the word has a part of speach word
    if (word.pos != undefined) {
      //if its a special word with [x]
      // create inputs
      const inputEdit = document.createElement("input");
      const inputPreview = document.createElement("input");
      inputPreview.readOnly = true;

      editParagraph.appendChild(inputEdit);
      previewParagraph.appendChild(inputPreview);
     
      inputEdit.placeholder = word.pos;
      inputPreview.placeholder = word.pos;

      inputEdit.maxLength = 20;

      inputEdit.addEventListener("keydown", () => {
        inputPreview.value = inputEdit.value;
      });

      //if the user enters ENTER key then the focus moves to the next input
      inputEdit.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          let nextElement = inputEdit.nextElementSibling;
          if (nextElement != null) {
            nextElement.focus();
          }
        }
      });
    } else {
      // if it does not have part of speach then the word
      editParagraph.append(` ${word.word}`);
      previewParagraph.append(` ${word.word}`);
    }
  }
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
    buildStory(processedStory);
  });
