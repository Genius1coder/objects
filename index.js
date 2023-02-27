// Question 1 solution 

function InstagramPost(author, content, imageLink, views, likes) {
    this.author = author;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}

// Question 2 solution 

let post1 = new InstagramPost('mary_ode', 'How the election went in my polling center!', 
'http://image.jpg', 15, 20);

let post2 = new InstagramPost('David_sam', 'Thank God is Friday!',
 'http://image2.jpg', 30, 40);

 // Question 3 solution

 // question a
 
 const createPerson = (name, age, location) => {
    return {
      name: name,
      age: age,
      location: location,
      scores: {
        ENG: 70,
        GOVT: 85,
        LIT: 82,
        CRK: 94
      }
    }
  };
  
  const Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

  // question b

  function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  
  Musa.JAMBScores = createJambScores(70, 85, 82, 94);

  // Question 4 solution

  The different methods of cloning objects are:
  1. Object.assign() Method
  2. Spread Operator
  3. jQuery.extend() Method
  4. Lodash.cloneDeep() Method
  5. JSON.parse(JSON.stringify()) Method 

  // The examples for each of the method are as follows;

  
1. Object.assign() Method:

const obj1 = {a: 1, b: 2};
const obj2 = Object.assign({}, obj1);

2. Spread Operator:

const obj1 = {a: 1, b: 2};
const obj2 = {...obj1};

3. jQuery.extend() Method:

const obj1 = {a: 1, b: 2};
const obj2 = jQuery.extend({}, obj1);

4. Lodash.cloneDeep() Method:

const obj1 = {a: 1, b: 2};
const obj2 = _.cloneDeep(obj1);

5. JSON.parse(JSON.stringify()) Method:

const obj1 = {a: 1, b: 2};
const obj2 = JSON.parse(JSON.stringify(obj1));

// Question 5 solution

for (let key in presidentialCandidates) {
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`)
  }