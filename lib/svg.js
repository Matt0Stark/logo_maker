class SVG {
    constructor (){
        this.textel = ""
        this.shapeEl = ""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeEl}${textel}</svg>`
    }
    setText(message, color){
        if (message.length > 3){
            throw new Error("must be three characters or less")
        } 
        this.textel = ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>
        `
    }
    setShape(shape){
        this.shapeEl = shape.render()
    }
}


module.export= SVG