const newKind = {
    1: "1",
    2: "2",
    3: "4",
    4: "3",
    5: "5",
    6: "6",
};

const translateKind = {
    6: 'Intensité',
    5: 'Vitesse',
    4: 'Endurance',
    3: 'Force',
    2: 'Energie' ,
    1: 'Cardio',
}

export default class Performance {
    constructor(data){
        this.data = data.data.map((element) => ({
            kind:  translateKind[newKind[element.kind]],
            value: element.value
            }))
       this.kind = data.kind
    }
}

