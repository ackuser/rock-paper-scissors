export default class Game {

    constructor(player_weapons) {
        this.player1_weapon = player_weapons[0];
        this.player1 = 'player1';
        this.player2_weapon = player_weapons[1];
        this.player2 = 'player2';
        this.winner = this.determineResult();       
    }

    determineResult() {
        switch (this.player1_weapon) {
            case 'rock':
                if (this.player2_weapon === 'scissors') {
                    return this.player1;
                } else if (this.player2_weapon === 'paper') {
                    return this.player2;
                } else {
                    return 'draw';
                }

            case 'paper':
                if (this.player2_weapon === 'rock') {
                    return this.player1;
                } else if (this.player2_weapon === 'scissors') {
                    return this.player2;
                } else {
                    return 'draw';
                }

            case 'scissors':
                if (this.player2_weapon === 'paper') {
                    return this.player1;
                } else if (this.player2_weapon === 'rock') {
                    return this.player2;
                } else {
                    return 'draw';
                }

            default:
                return 'draw';
        }

    }
}