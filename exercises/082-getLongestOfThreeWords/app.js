function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let moreLong = "";
    if (word1.length > moreLong.length) moreLong = word1; 
    if (word2.length > moreLong.length) moreLong = word2; 
    if (word3.length > moreLong.length) moreLong = word3; 
    return moreLong;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
