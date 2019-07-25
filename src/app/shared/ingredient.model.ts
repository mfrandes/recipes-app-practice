export class Ingredient {
    public ingredientName: string;
    public amount: number;

    contructor(ingName: string, amount: number ){
        this.ingredientName = ingName;
        this.amount = amount
    }
}