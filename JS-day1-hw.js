//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(i = 0; i < dog_names.length; i++){
        console.log(dog_string.search(dog_names[i]) >= 0? "Matched dog_name":"No Matches")
    }
}

findWords()

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i<arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1,"even index")
        }
    }return arr
}

console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// # Its Halloween and all the kids just got home from trick-or-treating.
// # we have a list representing how much candy each child in our group has made out with.
// # We don't want the kids to start arguing, and we know trouble is brewing as many of the children
// # in the group have received different amounts of candy from each home.
// # So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids,
// # that would be even worse.
// # Instead we decide to give each child extra candy until they all have the same amount.
// # In the first case the most candies are given to second kid , 8.
// # Because of that we will give the first kid 3 so he can have 8
// # and the third kid 2
// # and the fourth kid 4, so all kids will have 8 candies.
// # So we end up handing out 3 + 2 + 4 = 9.
// # Examples:
// # input: [5,8,6,4]
// # output: 9
// # input: [1,2,4,6]
// # output: 11
// # Notes:
// # the length of the list of children will always be greater than one.



function candies(kid_candy) {
    let the_max = Math.max(...kid_candy);
    let sum = 0;
    for (let kid of kid_candy) {
      sum += the_max - kid;
    }
    return sum;
  }
  