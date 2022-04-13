const exist = (board, word) => {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	let output = false;

	const traverse = (x, y, i, prefix) => {
		if (prefix === word) output = true;
		if (output) return;

		if (x < 0 || x >= board.length) return;
		if (y < 0 || y >= board[0].length) return;
		if (board[x][y] !== word[i]) return;

		const cv = board[x][y];
		board[x][y] = '';


		directions.forEach(([dx, dy]) => {
            console.log('DX', dx)
            console.log('DY', dy)
			traverse(x + dx, y + dy, i + 1, prefix + cv);
		});

		board[x][y] = cv;
	};

	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[0].length; c++) {
			traverse(r, c, 0, '');
		}
	}

	return output;
};