const newKind = {
    1: "1",
    2: "2",
    3: "4",
    4: "3",
    5: "5",
    6: "6",
};

const translateKind = {
    6: 'Cardio',
    5: 'Energie',
    4: 'Force',
    3: 'Endurance',
    2: 'Vitesse',
    1:'Intensité',
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

