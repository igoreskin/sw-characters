import axios from 'axios';

export function loadCharacters() {
  return (dispatch) => {
    dispatch({ type: "LOADING_CHARACTERS" });
    return axios.get('characters.json')
      .then(response => {
        const characters = response.data;
        if (!localStorage.getItem('characters')) {
          localStorage.setItem('characters', JSON.stringify(characters))
        }
        return (dispatch({ type: 'LOAD_CHARACTERS', payload: characters },
          // console.log(users)
        ))
      })
      .catch(error => console.log(error))
  }
}