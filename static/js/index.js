async function main() {
    setInterval(async () => {
        console.log("loop example"); 
    }, 5000);

}

async function example() {
    console.log("example!");
    let result = await fetch("/api/example");
    document.getElementById("example_header").innerText = await result.text();
}

async function sendCommand(command) {
    await fetch(`/api/sendcommand?command=${command}`)
    getpos()
}

async function goTo() {

    x = document.getElementById("x_input").value;
    y = document.getElementById("y_input").value;
    z = document.getElementById("z_input").value;
    console.log(x)
    console.log(x, y, z);
    await fetch(`/api/goto?x=${x}&y=${y}&z=${z}&sys=${0}`);

}


main();
