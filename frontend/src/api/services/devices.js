import authHeader, { BASE_URL, HTTP } from "../http";

export default {
    allDevices() {
        return HTTP.get(BASE_URL + "/devices", { headers: authHeader() }).then(
            (response) => {
              return response.data;
            }
          );
    },
    createDevice(device){
        return HTTP.post(BASE_URL + "/devices", device, { headers: authHeader() }).then(
            (response) => {
              return response.data;
            }
          );
    },
    editDevice(id, device) {
        return HTTP.put(BASE_URL + "/devices/" + id, device, {
          headers: authHeader(),
        }).then((response) => {
          return response.data;
        });
      },
    deleteById(id) {
        return HTTP.delete(BASE_URL + "/devices/" + id, {
          headers: authHeader(),
        }).then((response) => {
          return response.data;
        });
    },
    allDevicesForUser(id) {
      return HTTP.get(BASE_URL + "/devices/client/" + id, { 
        headers: authHeader(), }).then(
        (response) => {
          return response.data;
        }
      );
    },
};