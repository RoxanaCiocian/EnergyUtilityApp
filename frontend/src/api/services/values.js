import authHeader, { BASE_URL, HTTP } from "../http";

export default {
    allValuess() {
        return HTTP.get(BASE_URL + "/sensors/client/values", { headers: authHeader() }).then(
          (response) => {
            return response.data;
          }
        );
    },
    allValuessForDevice(id) {
        return HTTP.get(BASE_URL + "/sensors/client/values/" + id, { headers: authHeader() }).then(
          (response) => {
            return response.data;
          }
        );
    },
};