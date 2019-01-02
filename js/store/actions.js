export default {
    addWeapon(context, payload) {
        context.commit('addWeapon', payload);
    },
    addResult(context, payload) {
        context.commit('addResult', payload);
    }
};
