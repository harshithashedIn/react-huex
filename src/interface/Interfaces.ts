export interface ICourse {
    id: number;
    instructor: string;
    title: string;
    discountedPrice: string;
    price?: string;
    whishlist: boolean;
}
