class Spiderman {
    constructor(name,age,actor,movies,studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    getInfo() {
        return `Hey I am ${this.actor} From Marvel Studio`
    }
};

module.exports = Spiderman;