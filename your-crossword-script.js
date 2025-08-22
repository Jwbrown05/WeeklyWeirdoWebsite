document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, running crossword script');
  
    // Verify the crossword element exists
    const crosswordDiv = document.getElementById("crossword");
    if (!crosswordDiv) {
      console.error('Error: Could not find element with id="crossword"');
      return;
    }
  

const words = [
        // Down clues with correct row/col
        { number: 1, direction: "down", row: 0, col: 0, answer: "ANCHOVY", clue: "“Et tuna, Brute?” said this fish as it got stabbed by a salad fork" },
        { number: 2, direction: "down", row: 0, col: 1, answer: "LUA", clue: "Bright Eyes song and programming language" },
        { number: 3, direction: "down", row: 0, col: 3, answer: "MALAWI", clue: "The “Warm Heart of Africa,” which is a fifth water even though it's a landlocked country" },
        { number: 4, direction: "down", row: 0, col: 4, answer: "IV", clue: "Roman Numeral" },
        { number: 5, direction: "down", row: 0, col: 5, answer: "NADA", clue: "The amount of money in my bank account" },
        { number: 6, direction: "down", row: 0, col: 6, answer: "UTO", clue: "Acronym for what the Weekly Weirdo is giving me over the summer (I don’t get paid)" },
        { number: 7, direction: "down", row: 0, col: 7, answer: "MALAPHOR", clue: "Mixing aphorisms, idioms, or clichés" },
        { number: 8, direction: "down", row: 0, col: 8, answer: "FRO", clue: "To and ____" },
        { number: 9, direction: "down", row: 0, col: 11, answer: "LOSEONESMIND", clue: "To read the Weekly Weirdo is to ______" },
        { number: 13, direction: "down", row: 2, col: 2, answer: "RUSSIA", clue: "The moon is 2.22 times bigger than this country" },
        { number: 16, direction: "down", row: 3, col: 4, answer: "LEN", clue: "Shorthand for UNC’s premier dining hall" },
        { number: 19, direction: "down", row: 4, col: 8, answer: "LACAGE", clue: "Lyrics from this 1983 gay musical about a drag nightclub / Birdcage inspiration" },
        { number: 20, direction: "down", row: 4, col: 9, answer: "UNO", clue: "It came free with your Xbox (except the really old one)" },
        { number: 22, direction: "down", row: 5, col: 5, answer: "GREEN", clue: "Color of Science School Notebook" },
        { number: 25, direction: "down", row: 7, col: 1, answer: "CCELL", clue: "Big Batteries that watch over Mark Grayson" },
        { number: 26, direction: "down", row: 7, col: 3, answer: "NINTH", clue: "Ben’s birthday is November ____" },
        { number: 27, direction: "down", row: 7, col: 4, answer: "BC", clue: "Canada, Time, and Texting (Abbrv.)" },
        { number: 28, direction: "down", row: 7, col: 6, answer: "READE", clue: "With 14 across Bob Hope's wife's name before marriage, apt surname for English major" },
        { number: 30, direction: "down", row: 9, col: 0, answer: "WHA", clue: "Jimi Hendrix, Bruce Springsteen, Bob Dylan, Velvet Underground, and many more have played at this “Cafe” in NYC" },
        { number: 32, direction: "down", row: 9, col: 7, answer: "KAT", clue: "Chocolate Feline in a cradle" },
        { number: 33, direction: "down", row: 9, col: 9, answer: "DBZ", clue: "90s Anime with characters named after vegetables" },
        { number: 37, direction: "down", row: 10, col: 10, answer: "EE", clue: "Not a Scrabble word/Acronym for the Oscars 2023 best picture winner's first two words" },
      
        // Across clues with correct row/col
        { number: 1, direction: "across", row: 0, col: 0, answer: "ALUMINUMFOIL", clue: "DON’T LET THEM CONTROL YOU! USE _______. (1 down without it) #ad" },
        { number: 10, direction: "across", row: 1, col: 0, answer: "NU", clue: "This Greek letter lies as it is very old" },
        { number: 11, direction: "across", row: 1, col: 3, answer: "AVATAR", clue: "Not a blue person except for his forehead, but master of all four elements" },
        { number: 12, direction: "across", row: 2, col: 0, answer: "CARL", clue: "So-called “father of taxonomy” who had a pet raccoon named Sjupp, which he dissected to study its insides, first name" },
        { number: 14, direction: "across", row: 2, col: 5, answer: "DOLORES", clue: "The Lead singer of the Cranberries' first name and the first part of Doc Brown’s car" },
        { number: 15, direction: "across", row: 3, col: 2, answer: "UALA", clue: "Hawaiian sweet potato" },
        { number: 17, direction: "across", row: 4, col: 2, answer: "SWE", clue: "ABBA country (abbr.)" },
        { number: 18, direction: "across", row: 4, col: 7, answer: "PLUTO", clue: "Should still be a planet, but whatever :(" },
        { number: 21, direction: "across", row: 5, col: 0, answer: "SING", clue: "Airflow from the lungs" },
        { number: 23, direction: "across", row: 5, col: 0, answer: "HAN", clue: "See article “Who Killed Philippe Flop?”" },
        { number: 24, direction: "across", row: 6, col: 7, answer: "OCOME", clue: "What I say when I figure out what Adrianne Lenker song I am listening to/Special Fake News" },
        { number: 25, direction: "across", row: 7, col: 1, answer: "CANBERRA", clue: "What is the Capital of Australia?" },
        { number: 29, direction: "across", row: 8, col: 3, answer: "ICEE", clue: "Movie Slushies" },
        { number: 30, direction: "across", row: 9, col: 0, answer: "WEEN", clue: "SpongeBob's inspirers and 'Loop de Loop' creators" },
        { number: 31, direction: "across", row: 9, col: 5, answer: "NAKED", clue: "Without Clothes" },
        { number: 34, direction: "across", row: 10, col: 0, answer: "HL", clue: "One hundred liters (Abbrv.)" },
        { number: 35, direction: "across", row: 10, col: 6, answer: "DA", clue: "Slavic languages “yes”" },
        { number: 36, direction: "across", row: 10, col: 9, answer: "BEN", clue: "See all articles (Because they are good)/My friend, who is going to Japan this summer." },
        { number: 38, direction: "across", row: 11, col: 0, answer: "ALPHABETIZED", clue: "see article “Tale as old as time”" }
      ];
      
      

      const maxRows = 12;
      const maxCols = 12;
      
      // Create grid to track cell types and numbers
      const grid = Array.from({ length: maxRows }, () => 
          Array.from({ length: maxCols }, () => ({
              isWhite: false,
              number: null,
              wordIds: []
          }))
      );
  
      // Assign unique IDs to words for tracking
      words.forEach((word, index) => {
          word.id = index;
      });
  
      // Process all words to mark the grid
      words.forEach(word => {
          const { id, number, direction, row, col, answer } = word;
          const length = answer.length;
          
          // Mark starting cell
          grid[row][col].isWhite = true;
          grid[row][col].number = number;
          grid[row][col].wordIds.push(id);
          
          // Mark remaining cells
          for (let i = 1; i < length; i++) {
              const r = row + (direction === "down" ? i : 0);
              const c = col + (direction === "across" ? i : 0);
              
              if (r < maxRows && c < maxCols) {
                  grid[r][c].isWhite = true;
                  grid[r][c].wordIds.push(id);
              }
          }
      });
  
      // Set up the grid container
      crosswordDiv.style.display = 'grid';
      crosswordDiv.style.gridTemplateRows = `repeat(${maxRows}, 42px)`;
      crosswordDiv.style.gridTemplateColumns = `repeat(${maxCols}, 42px)`;
      crosswordDiv.style.gap = '1px';
      crosswordDiv.style.background = 'black';
      crosswordDiv.style.margin = '0 auto';
      crosswordDiv.innerHTML = '';
  
      // Create all cells
      for (let r = 0; r < maxRows; r++) {
          for (let c = 0; c < maxCols; c++) {
              const cell = document.createElement('div');
              cell.style.position = 'relative';
              
              if (grid[r][c].isWhite) {
                  cell.style.backgroundColor = 'white';
                  
                  // Add number if this is a word start
                  if (grid[r][c].number) {
                      const number = document.createElement('div');
                      number.textContent = grid[r][c].number;
                      number.style.position = 'absolute';
                      number.style.top = '2px';
                      number.style.left = '2px';
                      number.style.fontSize = '10px';
                      number.style.fontWeight = 'bold';
                      cell.appendChild(number);
                  }
                  
                  // Add input box
                  const input = document.createElement('input');
                  input.type = 'text';
                  input.maxLength = 1;
                  input.style.width = '100%';
                  input.style.height = '100%';
                  input.style.border = 'none';
                  input.style.textAlign = 'center';
                  input.style.fontSize = '16px';
                  input.style.fontWeight = 'bold';
                  input.dataset.row = r;
                  input.dataset.col = c;
                  cell.appendChild(input);
              } else {
                  cell.style.backgroundColor = 'black';
              }
              
              crosswordDiv.appendChild(cell);
          }
      }
  
      // Add check button
     // Create and style the check button
const checkButton = document.createElement('button');
checkButton.id = 'check-button';
checkButton.textContent = 'Check Answers';
checkButton.style.marginTop = '20px';

// Add it to the container (assuming crosswordDiv is inside #crossword-container)
crosswordDiv.parentElement.appendChild(checkButton);
  
      // Answer checking function
      function checkAnswers() {
          let allCorrect = true;
          const results = {};
          
          // Reset all highlighting
          document.querySelectorAll('.cell').forEach(cell => {
              cell.classList.remove('correct', 'incorrect');
          });
  
          // Check each word
          words.forEach(word => {
              const { id, direction, row, col, answer } = word;
              const userAnswer = [];
              
              // Collect user's letters
              for (let i = 0; i < answer.length; i++) {
                  const r = row + (direction === "down" ? i : 0);
                  const c = col + (direction === "across" ? i : 0);
                  const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
                  userAnswer.push(input?.value?.toUpperCase() || '');
              }
              
              // Check correctness
              const isCorrect = userAnswer.join('') === answer;
              results[id] = isCorrect;
              if (!isCorrect) allCorrect = false;
              
              // Highlight cells
              for (let i = 0; i < answer.length; i++) {
                  const r = row + (direction === "down" ? i : 0);
                  const c = col + (direction === "across" ? i : 0);
                  const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
                  if (input) {
                      input.parentElement.classList.add(isCorrect ? 'correct' : 'incorrect');
                  }
              }
          });
          
          // Show result
          const resultDiv = document.getElementById('result-message') || document.createElement('div');
          resultDiv.id = 'result-message';
          resultDiv.style.marginTop = '20px';
          resultDiv.style.padding = '10px';
          resultDiv.style.borderRadius = '5px';
          resultDiv.style.fontWeight = 'bold';
          
          if (allCorrect) {
              resultDiv.textContent = '🎉 Congratulations! All answers are correct!';
              resultDiv.style.backgroundColor = '#d4edda';
              resultDiv.style.color = '#155724';
          } else {
              const incorrectCount = Object.values(results).filter(x => !x).length;
              resultDiv.textContent = `You have ${incorrectCount} incorrect answer${incorrectCount !== 1 ? 's' : ''}. Keep trying!`;
              resultDiv.style.backgroundColor = '#f8d7da';
              resultDiv.style.color = '#721c24';
          }
          
          if (!document.getElementById('result-message')) {
              crosswordDiv.parentElement.appendChild(resultDiv);
          }
      }
  
      // arrow move button
      checkButton.addEventListener('click', checkAnswers);
      // ---- CLUES UNDER THE CROSSWORD ----
(function renderCluesBelow() {
    // build wrapper next to the crossword
    const cluesWrapper = document.createElement('div');
    cluesWrapper.id = 'clues-wrapper';
    cluesWrapper.style.maxWidth = `${crosswordDiv.offsetWidth}px`;
    cluesWrapper.style.margin = '20px auto';
    cluesWrapper.style.display = 'grid';
    cluesWrapper.style.gridTemplateColumns = '1fr 1fr';
    cluesWrapper.style.gap = '24px';
  
    const makeColumn = (title) => {
      const col = document.createElement('div');
      const h = document.createElement('h3');
      h.textContent = title;
      h.style.margin = '0 0 8px';
      col.appendChild(h);
      return col;
    };
  
    const acrossCol = makeColumn('Across');
    const downCol   = makeColumn('Down');
  
    const across = words
      .filter(w => w.direction.toLowerCase() === 'across')
      .sort((a, b) => a.number - b.number);
  
    const down = words
      .filter(w => w.direction.toLowerCase() === 'down')
      .sort((a, b) => a.number - b.number);
  
    const makeClueRow = (w) => {
      const row = document.createElement('div');
      row.textContent = `${w.number}. ${w.clue}`;
      row.style.fontFamily = 'serif';
      row.style.fontSize = '14px';
      row.style.margin = '0 0 6px';
      row.style.cursor = 'pointer';
      // click a clue -> focus its first cell
      row.addEventListener('click', () => {
        const input = document.querySelector(`input[data-row="${w.row}"][data-col="${w.col}"]`);
        if (input) { input.focus(); input.select(); }
      });
      return row;
    };
  
    across.forEach(w => acrossCol.appendChild(makeClueRow(w)));
    down.forEach(w => downCol.appendChild(makeClueRow(w)));
  
    cluesWrapper.appendChild(acrossCol);
    cluesWrapper.appendChild(downCol);
  
    // put clues right under the grid
    crosswordDiv.parentElement.appendChild(cluesWrapper);
  })();
  
      // Add this after creating all input elements
/// Add keyboard navigation to all input cells
// Add keyboard navigation to all input cells
// --- Keyboard navigation & auto-advance (no class required) ---
crosswordDiv.addEventListener('keydown', function (event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return; // only handle inputs
  
    const row = parseInt(target.dataset.row, 10);
    const col = parseInt(target.dataset.col, 10);
  
    const findNext = (r, c) =>
      document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
  
    let nextInput = null;
  
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        for (let nc = col + 1; nc < maxCols; nc++) {
          nextInput = findNext(row, nc);
          if (nextInput) break; // skips black/missing cells
        }
        break;
  
      case 'ArrowLeft':
        event.preventDefault();
        for (let nc = col - 1; nc >= 0; nc--) {
          nextInput = findNext(row, nc);
          if (nextInput) break;
        }
        break;
  
      case 'ArrowDown':
        event.preventDefault();
        for (let nr = row + 1; nr < maxRows; nr++) {
          nextInput = findNext(nr, col);
          if (nextInput) break;
        }
        break;
  
      case 'ArrowUp':
        event.preventDefault();
        for (let nr = row - 1; nr >= 0; nr--) {
          nextInput = findNext(nr, col);
          if (nextInput) break;
        }
        break;
  
      case 'Backspace':
        // If there’s a value, clear it; if empty, move left
        if (target.value) {
          target.value = '';
        } else {
          event.preventDefault();
          for (let nc = col - 1; nc >= 0; nc--) {
            nextInput = findNext(row, nc);
            if (nextInput) break;
          }
        }
        break;
  
      default:
        // Type a letter -> fill cell and advance to next column in SAME row
        if (/^[a-zA-Z]$/.test(event.key)) {
          event.preventDefault();
          target.value = event.key.toUpperCase();
          for (let nc = col + 1; nc < maxCols; nc++) {
            nextInput = findNext(row, nc);
            if (nextInput) break;
          }
        }
    }
  
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  });
  function renderClues(clues) {
    const acrossContainer = document.createElement("div");
    const downContainer = document.createElement("div");

    acrossContainer.innerHTML = "<h3>Across</h3>";
    downContainer.innerHTML = "<h3>Down</h3>";

    // Separate clues
    clues.forEach(clue => {
        const clueText = document.createElement("div");
        clueText.classList.add("clue");
        clueText.textContent = `${clue.number}. ${clue.clue}`;
        if (clue.direction.toLowerCase() === "across") {
            acrossContainer.appendChild(clueText);
        } else {
            downContainer.appendChild(clueText);
        }
    });

    const cluesWrapper = document.createElement("div");
    cluesWrapper.classList.add("clues-wrapper");
    cluesWrapper.appendChild(acrossContainer);
    cluesWrapper.appendChild(downContainer);

    document.body.appendChild(cluesWrapper);
}

// Call it with your clues array
renderClues(cluesArray); // replace with your actual variable name

})  