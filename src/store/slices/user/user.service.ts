import apiClient from "../../../utils/apiClient";
const RESOURCE = "/auth/login";

const login = (payload: any) => {
  return apiClient.post(`${RESOURCE}`, { ...payload });
};

const fetchUserData = (payload: any) => {
  return apiClient.post(`${RESOURCE}`, { ...payload });
};

export { login };
