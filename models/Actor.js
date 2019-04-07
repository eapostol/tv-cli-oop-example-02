let Actor = function(obj){
    let o = obj[0];
    let p = o.person;
    this.score = o.score;
    this.id = p.id;
    this.url = p.url;
    this.name = p.name;
    this.country = p.country;
    this.birth = p.birthday;
    this.death = this.deathday;
    this.gender =p.gender;
    this.image = p.image;
    this.type = "Actor";

    return this;
};

module.exports = Actor;
