import Component from '../lib/component.js';
import store from '../store/index.js';
import Game from '../lib/game.js';
import WeaponTypes from '../lib/enumWeaponType.js';
import Weapons from '../components/weapons.js';

export default class HumanPlayer extends Component {

    constructor() {
        super({
            store,
            element: document.querySelector('.js-player-1'),
        });

        this.weapons = [];

        // Instantiate all the weapons component
        Object.keys(WeaponTypes).forEach(type => {
            const weapon = new Weapons(WeaponTypes[type]);
            this.weapons.push(weapon)
            this.element.append(weapon.element);            
        });
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        if (store.state.results.currentItems.length == 2) {
            // Dispatch a new action of result
            store.dispatch('addResult', new Game(store.state.results.currentItems));
        }
    }
}
