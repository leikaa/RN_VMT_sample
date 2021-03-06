export const initialState = {
  transactionsHistory: [],
};

export function History(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_USER_TRANSACTIONS_HISTORY':
      return {
        ...state,
        transactionsHistory: payload.transactionsHistory,
      };
    case 'CLEAR_ALL_DATA':
      return {
        ...state,
        transactionsHistory: [],
      };
    default:
      return state;
  }
}
