import firebase from "../../services/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const DB_users = firebase.db.collection("users");

export const loginUser = (user, pass) => (dispatch) => {
  const auth = firebase.auth;
  const promise = auth.signInWithEmailAndPassword(user, pass);
  promise
    .then((docUser) => {
      DB_users.doc(docUser.user.uid)
        .get()
        .then((user) => {
          dispatch({
            type: "SET_LOGIN",
            user: {
              name: user.data().name,
              restaurantID: user.data().restaurantID,
            },
          });
        });
    })
    .catch((e) => MySwal.fire(e.message));
};

export const userLogout = () => (dispatch) =>
  dispatch({
    type: "SET_LOGOUT",
    logout: {},
  });
