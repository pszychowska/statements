import { AxiosRequestConfig } from "axios";

export function rewriteAxiosRequestConfig(configParams: {
    config: AxiosRequestConfig;
    functionKey?: string;
    baseUrl: string;
}) {
    return {
        ...configParams.config,
        headers: {
            ...configParams.config.headers,
            "x-functions-key": configParams.functionKey,
            Accept: "*/*"
        },
        baseURL: configParams.baseUrl
    };
}
