import axios from "axios";

export default {
    getPatches: function () {
        return axios.get("http://localhost:8080/patchwork/patches");
    },
    createPatch: function () {
        return axios.post("http://localhost:8080/patchwork/patch");
    },
    deletePatch: function (id) {
        return axios.delete(`http://localhost:8080/patchwork/patch/${id}`);
    },
    updatePatch: function (id) {
        return axios.put(`http://localhost:8080/patchwork/patch/${id}`);
    }
}