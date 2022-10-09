// import redux from "redux";

const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAMS = "BUY_ICE_CREAMS";

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "first redux app",
	};
}

function buyIceCreams() {
	return {
		type: BUY_ICE_CREAMS,
	};
}

// (prevState, action) => newState

const initialState = {
	numOfCakes: 10,
	numOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		case BUY_ICE_CREAMS:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};

		default:
			return state;
	}
};

const store = createStore(reducer);
console.log("Initial state - ", store.getState());
const unsubscribe = store.subscribe(() =>
	console.log("Update state - ", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
