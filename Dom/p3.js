

function cal(val) {
    let screen = document.getElementById('screen').value += val
}

function clr(params) {
    document.getElementById('screen').value = ""
}

function eq() {
    let screen = document.getElementById('screen').value
    console.log(screen);
    let res = eval(screen)
    document.getElementById('screen').value = res
    screen.value = res
    console.log(res);
}