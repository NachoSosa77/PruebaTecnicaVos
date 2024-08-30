const urlApi = "https://fakestoreapi.in/api/products";

export type Product = {
    id: string;
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

export async function getProductDetail(id: string): Promise<Product> {
    const res = await fetch(urlApi);
    const result = await res.json();
    const product = result.filter((item)=>item.id === id)
    return Promise.resolve(product[0] as Product)
} 
