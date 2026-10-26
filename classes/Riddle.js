// The Riddle class. Export it as the default export.
//
// Properties (received in the constructor):
// - id
// - name
// - taskDescription
// - correctAnswer
//
// Method:
// - ask(prompt)
//   - show the riddle (name and taskDescription) to the player
//   - ask the player for an answer using the `prompt` function that is passed in
//   - keep asking until the answer is correct


export class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id
        this.name = name
        this.taskDescription = taskDescription
        this.correctAnswer = correctAnswer

    }


    ask(prompt){
        let answer = prompt(this.taskDescription);

        while (answer !== this.correctAnswer) {
            console.log("Wrong answer. Try again!");
            answer = prompt(this.taskDescription);
        }

        console.log("Correct!");
    }
}