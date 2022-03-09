export class Product {
	productId: number = 0;
	name: string = "";
	description: string ="";
	isAvailable : boolean;

	constructor(productId:number, name: string, description: string, isAvailable: boolean){
		this.productId = productId;
		this.description = description;
		this.isAvailable = isAvailable;
		this.name = name;	
	}
}
export class ProductOrder {
	orderId: number;
	orderDate: Date;
	quantity: number;
	product: Product;

	constructor(orderId: number, quantity: number, product: Product){
		this.orderDate =new Date();
		this.orderId = orderId;
		this.quantity = quantity;
		this.product = product;
	}
}
