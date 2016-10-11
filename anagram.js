document.onkeyup = function (e) {
    keyUp();
    // console.log(testCases()); // uncomment if you want to see that test cases do indeed pass
};

function keyUp() {
	str1 = document.getElementById("str1").value
	str2 = document.getElementById("str2").value
	if (str1 != "" || str2 != "") {
		if (anagram(str1, str2)) {
			document.getElementById("background").className = "anagram"
			document.getElementById("answer").innerHTML = "YES :)"
		} else {
			document.getElementById("background").className = "notanagram"
			document.getElementById("answer").innerHTML = "NO :("
		}
	} else {
		document.getElementById("background").className = ""
			document.getElementById("answer").innerHTML = ""
	}
}

/* INPUT: str1 - string, str2 - string
   OUTPUT: true if both input strings are anagrams, else false
*/
function anagram (str1, str2) {
	var letterCount = { };

	letterCount = countWords(str1, letterCount, 1) // pass to do positive count of letters in str1
	letterCount = countWords(str2, letterCount, -1) // pass to do negative count of letters in str2
	
	/* If the strings are anagrams, we expect every entry in the dictionary to 
	 * be equal to 0. Otherwise there will be some entry with a negative or positive count. */
	for (key in letterCount) {
		if (letterCount[key] != 0)
			return false
	}

	return true
}

/* add count of letters to letterCount dicitonary, multiply by mult for every increment
   INPUT: str - string, letterCount - dictionary object, mult - int
   OUTPUT: letterCount, with updated counts
 */
function countWords (str, letterCount, mult) {
	for (idx in str) {
		letter = str[idx]

		// if the letter is in the dictionary, increase the count by 1 * multiplier
		if (letterCount[letter] == undefined) {
			letterCount[letter] = 1 * mult
		// if not, add the letter to to the dictionary with count 1 * multiplier
		} else {
			letterCount[letter] += 1 * mult
		}
	}
	return letterCount
}

function testCases() {
	return anagram("", "") &&
		!anagram("d", "") &&
		anagram("abed", "bade") &&
		anagram("leading", "dealing") &&
		anagram("regally", "largely") &&
		anagram("tirades", "staider") &&
		anagram("education", "cautioned") &&
		anagram("subtle", "sublet");
}