import axios from 'axios'; 
  
export default axios.create({
  baseURL: 'http://192.168.0.189/izabet_api/public/index.php'
});  // Private IP at Sync: 192.168.0.189
// baseURL: 'http://192.168.0.189/izabetapp/index.php' 