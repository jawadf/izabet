import axios from '../axios/axios';

import { getDeviceId, getBaseOs, getDeviceName } from 'react-native-device-info';
  

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

export const refreshAction = () => {
  return {
    type: 'REFRESH'
  };
}

/********   LOGIN, LOGOUT & REGISTER   ********/


export const loginAction = formValues => async dispatch => {
  const response = await axios.get(`/login?email=${formValues.email}&password=${formValues.password}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'LOGIN', payload: response.data });
};

  const baseOs = getBaseOs();
  console.log(baseOs);

export const logoutAction = () => {
  return {
    type: 'LOGOUT'
  }
}

export const registerAction = formValues => async dispatch => {
  const deviceName = getDeviceName().then(name => {
    return name;
  });

  let deviceId = getDeviceId();

  const response = await axios.post(`/register?email=${formValues.email}&password=${formValues.password}&device_id=${deviceId}&device_name=${deviceName}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'REGISTER', payload: response.data });
};

/***********   CLEANUP   *************/

export const cleanUserVehicles = () => {
  return {
    type: 'CLEAN_VEHICLES'
  }
}


/********    MAIN ACTIONS     ********/


// ADD VEHICLE
export const addVehicle = (formValues, userId) => async dispatch => {
  const response = await axios.post(`/vehicles?user_id=${userId}&type=2&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}&vehicle_name=${formValues.vehicle_name}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'ADD_VEHICLE', payload: response.data });
};

// ADD VEHICLE NAME (same as add vehicle, but the number and code are already given by the user in checkTickets)
export const addVehicleName = (formValues, currentNumber, currentCode, userId) => async dispatch => {
  const response = await axios.post(`/vehicles?user_id=${userId}&type=2&vehicle_number=${currentNumber}&vehicle_code=${currentCode}&vehicle_name=${formValues.vehicle_name}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'ADD_VEHICLE', payload: response.data });
};

// GET ALL VEHICLES OF THE USER
export const getUserVehicles = userId => async dispatch => {
  const response = await axios.get(`/vehicles?user_id=${userId}&type=2`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'GET_USER_VEHICLES', payload: response.data });
};

// DELETE VEHICLE
export const deleteVehicle = (id, userId) => async dispatch => {
  const response = await axios.delete(`/vehicles?user_id=${userId}&type=2&id=${id}`).catch(error => {
    return error.toString();
  });

  console.log(response.data);

  dispatch({ type: 'DELETE_VEHICLE', payload: response.data });
};

// CHECK TICKETS
export const checkTickets = (formValues, userId) => async dispatch => {
  const response = await axios.get(`/tickets?user_id=${userId}&type=2&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'CHECK_TICKETS', payload: response.data });
};



/********   LEGACY ACTIONS     ********/


// REQUEST ACCOUNT
// export const requestAccount = formValues => async dispatch => {
//   const response = await axios.get(`?tab=requestAccount&device_id=${formValues.device_id}&type=${formValues.type}`).catch(error => {
//       return error.toString();
//     });

//   dispatch({ type: 'REQUEST_ACCOUNT', payload: response.data });
// };

// // UPDATE TOKEN
// export const updateToken = formValues => async dispatch => {
//   const response = await axios.get(`?tab=updateToken&device_id=${formValues.device_id}&type=${formValues.type}&salt=${formValues.salt}&token=${formValues.token}`).catch(error => {
//     return error.toString();
//   });

//   dispatch({ type: 'UPDATE_TOKEN', payload: response.data });
// };

// CHECK TICKETS (LEGACY)
// export const checkTickets = formValues => async dispatch => {
//   const response = await axios.get(`?tab=checkTickets&user_id=${userId}&type=2&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}`).catch(error => {
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




