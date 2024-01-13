// Q5; The Vowel Counter: You Need To Create A Function That Counts The Number Of Vowels In A Given String Cosider Both Upper Case And Lower Case Vowels.

let string = 'Hello I AM String !';
VowelCounter(string);

function VowelCounter(data) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (const key in vowels) {
        for (const iterator of data) {
            if (vowels[key] == iterator.toLowerCase()) {
                counter++;
            }
        }
    }
    console.log(`${counter} vowels found in your string : ${data}`)
}