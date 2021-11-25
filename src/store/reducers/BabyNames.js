export default function babyName(state = null, action) {
	switch (action.type) {
		case 'xyx':
			return action.payload;
		default:
			return state;
	}
}
