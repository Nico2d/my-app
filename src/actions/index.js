import { GET_GITHUB_INFO_ACTION } from '../types';

export const getGithubInfo = dispatch => ({ userName, repoName }) => {
  console.log(dispatch);
  return fetch(`https://api.github.com/repos/${userName}/${repoName}`)
    .then(function (response) {
      return response.json();
    })
    .then((info) => {
      dispatch({
        type: GET_GITHUB_INFO_ACTION,
        payload: info,
      });
    });
}