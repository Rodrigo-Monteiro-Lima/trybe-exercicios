export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const requestAPI = () => ({ type: REQUEST_API });

const getPicture = (data) => ({ type: GET_PICTURE, data });

const failedRequest = (error) => ({ type: FAILED_REQUEST, error })

export const fetchAPI = (name) => {
  return async (dispatch) => {
    try {
      console.log(name)
      dispatch(requestAPI());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      console.log(response)
      const data = await response.json();
      console.log(data);
      dispatch(getPicture(data))
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}