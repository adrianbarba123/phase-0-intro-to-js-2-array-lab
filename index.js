let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const temp = [...cats, name];
    return temp;
}

function prependCat(name){
    const temp = [name, ...cats];
    return temp;
}

function removeLastCat(){
    const temp = [...cats];
    temp.pop();
    return temp;
}

function removeFirstCat(){
    const temp = [...cats];
    temp.shift();
    return temp;
}