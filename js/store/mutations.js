export default {
    addWeapon(state, payload) {
        state.results.currentItems.push(payload);
        return state;
    },
    addResult(state, payload) {
        state.results.numGames++;
        switch (payload.winner) {
            case 'player1':
                state.results.lastResult = 'player1';
                state.results.wins++;            
                break;
            case 'player2':
                state.results.lastResult = 'player2';
                state.results.lost++;            
                break;
            case 'draw':
                state.results.lastResult = 'draw';
                state.results.draws++;            
                break;
        }
        state.results.currentItems = [];
        return state;
    }
};
