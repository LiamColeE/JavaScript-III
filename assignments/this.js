/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: binds this to the window/console object
* 2. Implicit Binding: bind to the object the function that is being called is in (ie GameObject.shrink(), the this keyword would bind to GameObject)
* 3. New binding: binds to the specific  object that the constructor creates
* 4. Explicit binding: when JS's call or apply methods are called this is explicitly defined in them
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function eat(){
    console.log(this);
}
eat();

// Principle 2

// code example for Implicit Binding
function GameObject(gameObjectAttributes){
    this.createdAt = gameObjectAttributes.createdAt;
    this.name = gameObjectAttributes.name;
    this.dimensions = gameObjectAttributes.dimensions;
}
  
GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game`
}

// Principle 3

// code example for New Binding
const potato = new GameObject({
    createdAt: new Date(),
    name: "potato",
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    }
});

const apple = new GameObject({
    createdAt: new Date(),
    name: "apple",
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    }
});

// Principle 2

// code example for Implicit Binding
apple.destroy();
potato.destroy();


function CharacterStats(characterStats){  
// Principle 4

// code example for Explicit Binding
    GameObject.call(this,characterStats);
    this.healthPoints = characterStats.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage`
}