// The Player class. Export it as the default export.
//
// Properties:
// - name
// - times (an array that holds the time it took to solve each riddle)
//
// Methods:
// - recordTime(start, end)
//   - calculate the duration (end - start) and add it to the times array
// - showStats()
//   - show the total time and the average time per riddle


export class Player {

    times = [];

    constructor(name) {
        this.name = name;
    }

    recordTime(start, end) {

        this.times.push(end-start)

    }

    showStats() {

        let total = 0;

        for (const time of this.times) {
            total += time;
        }

        const average = this.times.length > 0 
        ? total / this.times.length 
        : 0;

        console.log(`Player: ${this.name}`);
        console.log(`Total time: ${total / 1000} seconds`);
        console.log(`Average time: ${average / 1000} seconds`);
    }

}