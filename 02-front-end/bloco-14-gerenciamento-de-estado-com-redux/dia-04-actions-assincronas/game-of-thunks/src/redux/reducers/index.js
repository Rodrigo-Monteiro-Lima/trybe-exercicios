const initialState = {
  isFetching: false,
  char: [],
  error: '',
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_API":
      return { ...state, isFetching: true };
    case 'GET_PICTURE':
      return { ...state, char: action.data[0], isFetching: false };
    case "FAILED_REQUEST":
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};

export default reducer;
