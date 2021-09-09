const FETCH_ALL_JOBS = 'JOBS/FETCH_ALL_JOBS';

export const fetchCategories = async () => {
  const jobList = await fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=6c2d08df2b4645477a2cfe6926f2b36f');
  const jobs = await jobList.json();
  console.log('Fetched categories: ', jobs);
};

fetchCategories();

export const fetchCategoryJobs = () => async (dispatch) => {
  const jobList = await fetch('url');
  const jobs = await jobList.text();
  dispatch({
    action: FETCH_ALL_JOBS,
    payload: jobs,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_JOBS: return action.payload;
    default: return state;
  }
};

export default reducer;
