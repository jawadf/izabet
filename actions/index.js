import axios from '../axios/axios';
import { withNavigation } from 'react-navigation';

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
  const response = await axios.get(`?tab=addVehicle&device_id=${formValues.device_id}&type=${formValues.type}&salt=${formValues.salt}&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'ADD_VEHICLE', payload: response.data });
};

// DELETE VEHICLE
export const deleteVehicle = formValues => async dispatch => {
  const response = await axios.get(`?tab=deleteVehicle&id=${formValues.id}&device_id=${formValues.device_id}&type=${formValues.type}&salt=${formValues.salt}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'DELETE_VEHICLE', payload: response.data });
};


// CHECK TICKETS
export const checkTickets = formValues => async dispatch => {
  const response = await axios.get(`?tab=checkTickets&device_id=123456&type=2&salt=1&vehicle_number=${formValues.vehicle_number}&vehicle_code=${formValues.vehicle_code}`).catch(error => {
    return error.toString();
  });

  dispatch({ type: 'CHECK_TICKETS', payload: response.data });
};

// ALL TICKETS
// export const checkAllTickets = formValues => async dispatch => {
//   const response = await axios.get(`?tab=allTickets`).catch(error => {
//     return error.toString();
//   });

//   dispatch({ type: 'ALL_TICKETS', payload: response.data });
// };




