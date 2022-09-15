function balancingParentheses(string) {
  // type your code here
  let hash = {
    open: 0,
    close: 0
  }

  let amount = string.split("")

  amount.array.forEach(element => {
    if (element === ')')
    {
      hash[close]+=1
    }
    else{
      hash[open]+=1
    }
  });

  return Math.abs(hash[open]-hash[close])

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// count how many paranthesis there are in the string

// 