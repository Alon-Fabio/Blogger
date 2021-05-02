// Builder component
import createDataContext from "./createDataContext";

// My way to add counting ID
const findMaxId = (state) => {
  if (state.length > 0) return Number(state[state.length - 1].id) + 1;
  return 1;
};

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.Title,
          content: action.payload.Content,
        },
      ];
    case "delete":
      return state.filter((blogpost) => blogpost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (Title, Content, callback) => {
    dispatch({ type: "add_blogpost", payload: { Title, Content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete", payload: id });
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
