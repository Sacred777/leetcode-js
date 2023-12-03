// My solution

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    const counts = {};

    for(const ch of chars) {
        counts[ch] = !counts[ch] ? counts[ch] = 1 : ++counts[ch];
    }

    function isRightWord(word, counts) {
        const countsClone = {...counts};
        for(const letter of word) {
            if(!countsClone[letter]) return false;
            countsClone[letter]--;
        };

        return true;
    }

    words.forEach((word) => {
        if(isRightWord(word, counts)) {
            result += word.length;
        }
    })

    return result;
};


// const words = ["cat","bt","hat","tree"];
// const chars = "atach";

const words = ["hello","world","leetcode"];
const chars = "welldonehoneyr";

console.log(countCharacters(words, chars));
