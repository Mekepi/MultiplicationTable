function tabuada(numb) {

    if(!document.querySelector("#gerado")) {
        let criando = document.createElement("optgroup");
        criando.id = "gerado";
        document.querySelector("select").appendChild(criando);
    };

    for (let i=1; i<11;) {
        let numero = document.createElement("option");
        numero.value = `${numb*i}`;
        numero.text = `${numb} x ${i} = ${numb*(i++)}`;
        document.querySelector("#gerado").appendChild(numero)
    }

    document.querySelector("select").size = 10;
    return;
};

function resultado() {
    numb = document.querySelector('input#numero').value;

    if(document.querySelector("#gerado")) {
        document.querySelector("#gerado").remove()
        document.querySelector("select").size = "";
    }

    if (numb === "") {
        alert("Por favor digite um número.");
        return;
    };

    tabuada(numb);

    return;
};