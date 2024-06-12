import * as LoginUtils from '@/utils/LoginUtils'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';

const instance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 20 * 1000
});

function getBaseUrl(): string {
    return import.meta.env.VITE_BASE_URL;
}

function getParams($params: any) {

    if ($params == null)
        $params = {};

    var nParams = $params;

    if (LoginUtils.isLoggedIn()) {
        nParams['token'] = LoginUtils.currentUser().token;
    }

    return nParams;
}

export function get($route: String, $params: any) {
    return new Promise((resolve, reject) => {
        let route = getBaseUrl() + $route;
        instance.get(route, { params: getParams($params) })
            .then(function (result : any) {
                resolve(result.data);
            })
            .catch(function (err : any) {
                if (err.response && err.response.data) {
                    reject(err.response.data);
                    checkNotAuthorized(err);
                } else {
                    reject(err);
                }
            });
    });
}

export function post($route: String, $params: any) {
    return new Promise((resolve, reject) => {
        let route = getBaseUrl() + $route;
        instance.post(route, getParams($params))
            .then(function (result : any) {
                console.log(result.data)
                resolve(result.data);
            })
            .catch(function (err : any) {
                if (err.response && err.response.data) {
                    reject(err.response.data);
                    checkNotAuthorized(err);
                } else {
                    reject(err);
                }
            });
    });
}

export function put($route: String, $params: any) {
    return new Promise((resolve, reject) => {
        let route = getBaseUrl() + $route;
        instance.put(route, getParams($params))
            .then(function (result : any) {
                resolve(result.data);
            })
            .catch(function (err : any) {
                if (err.response && err.response.data) {
                    reject(err.response.data);
                    checkNotAuthorized(err);
                } else {
                    reject(err);
                }
            });
    });
}

export function remove($route: String, $params: any) {
    return new Promise((resolve, reject) => {
        let route = getBaseUrl() + $route;
        instance.delete(route, { params: getParams($params) })
            .then(function (result : any) {
                resolve(result.data);
            })
            .catch(function (err : any) {
                if (err.response && err.response.data) {
                    reject(err.response.data);
                    checkNotAuthorized(err);
                } else {
                    reject(err);
                }
            });
    });
}

function checkNotAuthorized(err: any) {
    if (err.response.data.code == 403) {
        LoginUtils.logout();
        const router = useRouter();
        const route = useRoute();
        if (route.name != 'login')
            router.push({ name: 'login' }).catch(() => { });;
    }
}