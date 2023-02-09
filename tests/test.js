import {Team} from "../src/js/Team";
import {Character} from "../src/js/Character";

test('test 1', () => {
    const team = new Team();
    const testCharacters = [
        new Character('Лучник', 'Bowman', 50, 1, 50, 10),
        new Character('Мечник', 'Swordman', 100, 2, 30, 20),
        new Character('Маг', 'Magican', 50, 3, 80, 5),
        new Character('Демон', 'Deamon', 120, 4, 50, 15)
    ]

    for (let i = 0; i < 4; i++){
        team.addToTeam(testCharacters[i]);
    }

    let i = 0;
    for (let item of team){
        expect(item).toEqual(testCharacters[i++])
    }
})