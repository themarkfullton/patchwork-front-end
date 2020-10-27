import axios from "axios";

export default {
    getPatches: function () {
        return axios.get("http://localhost:8080/patchwork/patches");
    },
    createPatch: function (creator, name, pattern, texture, temperment, greeting) {
        return axios.post("http://localhost:8080/patchwork/patch", {
            creator: creator,
            name: name,
            pattern: pattern,
            texture: texture,
            temperment: temperment,
            greeting: greeting
        });
    },
    deletePatch: function (id) {
        return axios.delete(`http://localhost:8080/patchwork/patch/${id}`);
    },
    updatePatch: function (id, creator, name, pattern, texture, temperment, greeting ) {
        return axios.put(`http://localhost:8080/patchwork/patch/${id}`, {
            creator: creator,
            name: name,
            pattern: pattern,
            texture: texture,
            temperment: temperment,
            greeting: greeting
        });
    }
}