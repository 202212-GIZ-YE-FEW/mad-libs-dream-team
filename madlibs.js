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
  let arr = rawStory.split(' ');
  let newArray = arr.map(ele => { 
    if(ele.includes('[')){ 
      let pos;
      let index = ele.indexOf('[');
      let word = ele.slice(0,index);
      let regex = ele.match(/\[(.*?)\]/)[1]; //Dot . =>match any character except newlines     Quantifier * => Match 0 or more of the preceding token.  Lazy ? =>Makes the preceding quantifier lazy, causing it to match as few characters as possible.
      if(regex === 'v'){
        pos = 'verb';
      } else if(regex === 'n'){
        pos = 'noun';
      } else if(regex === 'a'){
        pos = 'adjective ';
      }
      return {word: word, pos: pos}
    } else{
      return {word: ele}
    }
  });
  return newArray;
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
});
