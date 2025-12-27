export const treatmentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TREATMENT":
      return [...state, action.payload];
    default:
      return state;
  }
};
