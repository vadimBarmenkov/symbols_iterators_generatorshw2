
export class Team{
    constructor() {
        this.end = 0;
    }

    addToTeam(object){
        this[this.end++] = object;
    }

    *[Symbol.iterator](){
        for (let i = 0; i < this.end; i++){
            yield this[i];
        }
    }
}