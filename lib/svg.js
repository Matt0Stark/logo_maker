const { Circle, Triangle, Square } = require('./shapes')

class SVG {
    constructor (text, textColor, shape, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
        this.textEl = ""
        this.shapeEl = ""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(){
        if (this.text.length > 3){
            throw new Error("must be three characters or less")
        } 
        this.textEl = 
`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `
    }
    setShape(){
        if (this.shape === 'Circle') {
            this.shapeEl = new Circle(this.shapeColor).render()
        } else if (this.shape === 'Triangle') {
            this.shapeEl = new Triangle(this.shapeColor).render()
        } else {
            this.shapeEl = new Square(this.shapeColor).render()
        }
        
        
        
        // set for triangle and squares
    }
}


module.exports = SVG