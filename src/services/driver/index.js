import { API } from "configs";
import { handleAsync, addDbCollection } from "utils";
import { store, getDriver } from "modules";

const { dispatch } = store;

export const getDrivers = async (payload = {}) => {
    const [res] = await handleAsync(API.getDriver(payload));
    if (res) {
        const data = res.axiosResponse.data;
        dispatch(getDriver(data));
        addDbCollection('driver', data);
        return data;
    }
};