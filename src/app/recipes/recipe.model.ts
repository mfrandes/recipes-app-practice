export class Recipe{
    public name: string;
    public imagePath: string;
    public description: string;

    
    constructor(name: string, imgPath, desc: string){
        this.name = name;
        this.imagePath = imgPath;
        this.description= desc;
    }
}