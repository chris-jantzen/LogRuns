const initState = {
  logRunError: null
};

const LogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOG_RUN_ERROR':
      console.error('Error adding run');
      return {
        ...this.state,
        logAddError: 'Error adding run'
      };
    case 'RUN_LOGGED':
      console.log('Run logged');
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default LogReducer;
