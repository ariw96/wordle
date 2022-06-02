import wordBank from "./word-bank.txt";
export const wordGenerater = async () => {
	let wordSet;
	await fetch(wordBank)
		.then((response) => response.text())
		.then((result) => {
			wordSet = new Set(result.split("\n"));
		})
		.catch((error) => console.log("error", error));
	return wordSet;
};
export const randomWord = (wordSet) => {
	const wordArr = Array.from(wordSet);
	const randomWord = wordArr[Math.floor(Math.random() * wordSet.size)];
	console.log(randomWord);
	return randomWord;
};
