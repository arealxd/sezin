import {login, request} from "@/service/utils";

export default {
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.email
     * @param {String} params.data.password
     *
     * @returns {Promise}
     */
    login(params = {}) {
        return request('post', '/authorization/login', params).then((response) => {
            login(response.data.token);
            return response;
        })
    },
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.email
     * @param {String} params.data.password
     * @param {String} params.data.fullName
     *
     * @returns {Promise}
     */
    signup(params = {}) {
        return request('post', '/authorization/register', params).then((response) => {
            return response;
        });
    }
};
