import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { rewriteAxiosRequestConfig } from "./RewriteAxiosRequestConfig";

const statementsApi = axios.create();

statementsApi.interceptors.request.use((config: AxiosRequestConfig) => {
    return rewriteAxiosRequestConfig({
        config: config,
        functionKey: "PiLs3atSGxR13EBAsezOFOJmoJrBBfZiSaGBcRWIrHmn3Wkoe0yZgg==", // TODO: move to settings (.env file)
        baseUrl: "https://szkolaecom2019.azurewebsites.net/api" // TODO: move to settings (.env file)
    });
});

export interface StatementsApi {
    get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}

export default statementsApi;
