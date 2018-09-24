module.exports = function longestConsecutiveLength(array) {

	if(array.length == 0) return 0;

	let set = new Set();
	let max = 1;

	for(let value of array){
		set.add(value);
	}

	for(let value of array){
		let left = value - 1;
		let right = value + 1;
		let count = 1;

		while(set.has(left)){
			count++;
			set.delete(left);
			left--;
		}

		while(set.has(right)){
			count++;
			set.delete(right);
			right++;
		}

		max = Math.max(count, max);
	}

	return max;

}
