//your JS code here. If required.
state: "failed",
body: "() => list_texts.forEach((text, idx) => cy.get('li').eq(idx).should('match', new RegExp('^' + text + '$')))",
displayError: "AssertionError: Timed out retrying after 4000ms: expected '<li>' to match /^We can reduce the memory usage of the program and increase it's? total run time$/ at eval (http://localhost:3000/__cypress/tests?p=cypress/integration/tests/test.spec.js:111:97) at Array.forEach (<anonymous>) at Context.eval (http://localhost:3000/__cypress/tests?p=cypress/integration/tests/test.spec.js:111:53)"
