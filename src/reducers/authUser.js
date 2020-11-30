export default function authUser(state = {}, action) {
  switch (action.type) {
    case "FETCH_AUTH_USER_SUCCESS":
      return action.authUser;
    default:
      return state;
  }
}
