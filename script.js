/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 * DONE: Convert code into ES6
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
updateText = () => {
  // CODE GOES HERE
  //assing the values inputted by the user to the variable named 'text'
  let text = document.getElementById('text-input').value;
  //set text of the formatted text based from what the user inputted
  document.getElementById('text-output').innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
makeBold = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) =>{
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
makeUnderline = (elem) =>{
    //CODE GOES HERE
    elem.classList.toggle('active');

    if(document.getElementById('text-output').classList.contains('underline')){
      document.getElementById('text-output').classList.remove('underline');
    }else{
      document.getElementById('text-output').classList.add('underline');
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) =>{
  // CODE GOES HERE

  let getType = document.getElementById('text-output').style.textAlign = alignType;
  let buttonList = document.getElementsByClassName('align');
  for(let button of buttonList){
    button .classList.remove('active');
  }
  elem.classList.toggle('active');
}