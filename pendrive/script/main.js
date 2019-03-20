class Pendrive {

    constructor(size){
        this.pendrive.size = size;
        this.pendrive.place = size;
    }

    pendrive = {
        size : null,
        data : [],
        place : null,
        error : false
    }

    data = [];

    getSize(){
        return this.pendrive.size;
    }

    getData(){
        return this.data;
    }

    getPlace(){
        return this.pendrive.place;
    }

    addData(data){
        if(this.pendrive.place > 0){
            this.data.push(data);
            this.pendrive.place = this.getPlace()-1;
        } else {
            
        }
    }

}

let pendrive = new Pendrive(10);

function showPendrive(){

    document.getElementById("size").innerHTML = pendrive.getSize();

    document.getElementById("data").innerHTML = pendrive.getData();

    document.getElementById("place").innerHTML = pendrive.getPlace();

}

function addDataToPendrive(){

    var data = document.getElementById("input-text").value;

    if(!data){

        document.getElementById("data-error").innerHTML = "Nem adtál meg adatot!";

        document.getElementById("data-success").innerHTML = "";

    } else {
     
        pendrive.addData(data);

        document.getElementById("input-text").value = "";

        document.getElementById("data-error").innerHTML = "";

        document.getElementById("data-success").innerHTML = "Adat hozzáadva!";

        this.showPendrive();
    }

}