function exercici() {
    console.log("Codi postal - 5 dígits");
    //console.log(codipostal(83457));
    console.log("Compte corrent - dddd-dddd-dd-dddddddddd");
    console.log(comptecorrent("6634-1234-23-23455923448"));
    console.log("Telefon - {(+0034) ddd.ddd.ddd}");
                           //  +0034 234.245.245
    console.log(Telefon("(+0034) 234.245.245"));
    console.log("DNI: ddddddddC dddddddd-C Cdddddddd");
    console.log(DNI("77887789-c"));
}
function codipostal(cp){
    let codipostal= /^[0-9]{5}$/;
    return codipostal.test(cp);
};
function comptecorrent(cc){
    let comptecorrent= /^[0-9]{4}[\-]?[0-9]{4}[\-]?[0-9]{2}[\-]?[0-9]{10}$/;
    return comptecorrent.test(cc);
};
function Telefon(T){
    let telefon= /^[(]?[\+]?[0-9]{4}[)]?[\ ]?[0-9]{3}[\.]?[0-9]{3}[\\]?[0-9]{3}/;
    return telefon.test(T);
}

function DNI(DNI1){
    let dni2 = /^[0-9]{8}[a-z]{1}$/;
    let dni3 = /^[0-9]{8}-[a-z]{1}$/;
    let dni4 = /^[a-z]{1}[0-9]{8}$/;
    return dni3.test(DNI1);
    return dni3.test(DNI1);
    return dni4.test(DNI1);

}

