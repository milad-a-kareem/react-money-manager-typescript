class Cost {
    id:string
    constructor(public title:string, public costAmount:number, public date:string){
        this.id = new Date().getTime().toString()
    }

}

export default Cost