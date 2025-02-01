// The magical sorting Hat: Imagine you ate creating a magical sorting hat for a wizard school.Implement a javascript that takes an array of studeb=nt names assigns them to one of the four houses (Gryffind (length less than 6 ), Hufflepuff(length less than 8 ), RavenClaw( length less than 12 ), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let students = ["shubh", "anjali", "shivani", "Shivangi", "Annapurna",
    "Shubham", "Krishnanendu", "Ravindranatham", "Shivesh",
    "Kaif", "Emanuel"]

let houses = []

for (const student of students) {
    if (students.length < 6) {
        houses.push("Gryffindor")
    }

    else if (student.length < 8) {
        houses.push("Hufflepuff")
    }

    else if (student.length < 12) {
        houses.push("Ravenclaw")
    }

    else {
        houses.push("Slytherin")
    }
}

console.log(houses)

 