export interface ProductPreviewType {
	id: string;
	image: string;
	price: number;
	name: string;
}

export interface ProductDetailedType {
	id: string;
	images: Array<string>;
	name: string;
	category: Array<string>;
	about: string;
}
