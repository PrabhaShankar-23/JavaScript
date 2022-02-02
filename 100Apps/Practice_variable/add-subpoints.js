let points = 10;
// let add = 50;
// let sub = 34;
// points = points + add;
// points= points - sub;

function add3points() {
    points= points + 3;
// could have been written in better manner. such as points+= 3;f
}

function remove1point() {
    points = points -1;

}
add3points();
console.log(points);

remove1point();
console.log(points);


