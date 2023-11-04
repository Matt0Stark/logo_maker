class Shape {
    constructor (){
        this.color = ""
    }

    setColor(color){
        this.color = color
    }
}


class Circle extends Shape {
    render(){
        return ` <circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// adjust return
class Triangle extends Shape {
    render(){
        return ` <circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(){
        return ` <circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

module.export = {Circle, Triangle, Square}