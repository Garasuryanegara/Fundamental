//No. 1
function luaspersegi(p,l) {
    return (p*l);
};

console.log(luaspersegi(4,5));

//No. 2
function kelilingpersegi(p,l) {
    return (2*(p+l));
};

console.log(kelilingpersegi(4,5));

//No. 3
function diameter(r) {
    return (2*r);
}

console.log(diameter(5));

function keliling(phi,r) {
    return (2*phi*r)
}

console.log(keliling(3.14,5));

function luas(phi,r) {
    return (phi*r**2)
}

console.log(luas(3.14,5));

//No. 4
function sudut(a,b) {
    return (180-a-b)
}

console.log(sudut(50,60));

//No. 5
function dates(A,B) {
    return (A-B)
}

console.log(dates(new Date()-new Date(2023,01,08)));