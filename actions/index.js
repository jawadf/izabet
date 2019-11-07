import axios from '../axios/axios';
  

/********   REDIRECT ACTIONS     ********/

export const redirectTrue = () => {
  return {
    type: 'REDIRECT_TRUE'
  };
}

export const redirectFalse = () => {
  return {
    type: 'REDIRECT_FALSE'
  };
}

/********    LOGIN & LOGOUT     ********/


// ADD VEHICLE
export const loginAction = formValues => async dispatch => {
  const response = await axios.get(`/login?email=${formValues.email}&password=${formValues.password}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'LOGIN', payload: response.data });
};

export const logoutAction = () => {

  return {
    type: 'LOGOUT'
  }
}


/********    MAIN ACTIONS     ********/


// REQUEST ACCOUNT
export const requestAccount = formValues => async dispatch => {
  const response = await axios.get(`?tab=requestAccount&device_id=${formValues.device_id}&type=${formValues.type}`).catch(error => {
      return error.toString();
    });

  dispatch({ type: 'REQUEST_ACCOUNT', payload: response.data });
};

// UPDATE TOKEN
export const updateToken = formValues => async dispatch => {
  const response = await axios.get(`?tab=updateToken&device_id=${formValues.device_id}&type=${formValues.type}&salt=${formValues.salt}&token=${formValues.token}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'UPDATE_TOKEN', payload: response.data });
};

// ADD VEHICLE
export const addVehicle = formValues => async dispatch => {
  const response = await axios.post(`/vehicles?device_id=123456&type=2&salt=1&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}&vehicle_name=${formValues.vehicle_name}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'ADD_VEHICLE', payload: response.data });
};

// ADD VEHICLE NAME (same as add vehicle, but the number and code are already given by the user in checkTickets)
export const addVehicleName = (formValues, currentNumber, currentCode) => async dispatch => {
  const response = await axios.post(`/vehicles?device_id=123456&type=2&salt=1&vehicle_number=${currentNumber}&vehicle_code=${currentCode}&vehicle_name=${formValues.vehicle_name}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'ADD_VEHICLE', payload: response.data });
};

// GET ALL VEHICLES OF THE USER
export const getUserVehicles = () => async dispatch => {
  const response = await axios.get(`/vehicles?device_id=123456&type=2&salt=1`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'GET_USER_VEHICLES', payload: response.data });
};

// DELETE VEHICLE
export const deleteVehicle = id => async dispatch => {
  const response = await axios.delete(`/vehicles?device_id=123456&type=2&salt=1&id=${id}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'DELETE_VEHICLE', payload: response.data });
};

// CHECK TICKETS
export const checkTickets = formValues => async dispatch => {
  const response = await axios.get(`/tickets?device_id=123456&type=2&salt=1&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'CHECK_TICKETS', payload: response.data });
};


// CHECK TICKETS (LEGACY)
// export const checkTickets = formValues => async dispatch => {
//   const response = await axios.get(`?tab=checkTickets&device_id=123456&type=2&salt=1&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}`).catch(error => {
//     return error.toString();
//   });

//   dispatch({ type: 'CHECK_TICKETS', payload: response.data });
// };

// ALL TICKETS
// export const checkAllTickets = formValues => async dispatch => {
//   const response = await axios.get(`?tab=allTickets`).catch(error => {
//     return error.toString();
//   });

//   dispatch({ type: 'ALL_TICKETS', payload: response.data });
// };




