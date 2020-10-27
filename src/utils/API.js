import axios from "axios";

export default {
    getPatches: function () {
        return axios.get("https://patchwork-api.herokuapp.com/patchwork/patches");
    },
    createPatch: function (creator, name, pattern, texture, temperment, greeting) {
        return axios.post("https://patchwork-api.herokuapp.com/patchwork/patch", {
            creator: creator,
            name: name,
            pattern: pattern,
            texture: texture,
            temperment: temperment,
            greeting: greeting
        });
    },
    deletePatch: function (id) {
        return axios.delete(`https://patchwork-api.herokuapp.com/patchwork/patch/${id}`);
    },
    updatePatch: function (id, creator, name, pattern, texture, temperment, greeting ) {
        return axios.put(`https://patchwork-api.herokuapp.com/patchwork/patch/${id}`, {
            creator: creator,
            name: name,
            pattern: pattern,
            texture: texture,
            temperment: temperment,
            greeting: greeting
        });
    }
}