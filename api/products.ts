const urlApi = "https://fakestoreapi.in/api/products";

export type Product = {
    id: number;
    image: string;
    title: string,
    description: string,
    category: string,
    price: number;
}

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(urlApi);
    const json = await res.json();
    return Promise.resolve(
        json.products.map((product) => ({ id: product.id, title: product.title, image: product.image, price: product.price, category: product.category }))
    )


}

export async function getProductDetail(id:number){
    const urlId = `https://fakestoreapi.in/api/products/${id}`;
    const res = await fetch(urlId);
    const json = await res.json();
    return json
    
} 
