import { Product } from "../types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let products: Product[] = [{
  id: "1",
  description: "Product 1 ",
  price: 100,
}, {
  id: "2",
  description: "Product 2 ",
  price: 200,
}, {
  id: "3",
  description: "Product 3 ",
  price: 300,
}];

// @desc get all products
// @route GET /api/v1/products

export const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc get a single product
// @route GET /api/v1/products/:id

export const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const { id } = params;
  const product: Product | undefined = products.find((p) => p.id === id);

  if (product) {
    response.status = 200;
    response.body = { success: true, data: product };
  } else {
    response.status = 404;
    response.body = { success: false, data: "Product does not exists" };
  }
};

// @desc add a single product
// @route POST /api/v1/products

export const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { success: false, data: "No data" };
  } else {
    const body = await request.body();
    const newPoduct: Product = body.value;
    newPoduct.id = v4.generate();
    products.push(newPoduct);
    response.status = 201;
    response.body = { success: true, data: products };
  }
};

// @desc update a single product
// @route PUT /api/v1/products/:id

export const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const { id } = params;
  const product: Product | undefined = products.find((p) => p.id === id);

  if (product) {
    const body = await request.body();
    const updateProduct: Product = body.value;
    const { id } = params;

    products = products.map((p) =>
      p.id === id ? { ...p, ...updateProduct } : p
    );

    response.status = 200;
    response.body = { success: true, data: products };
  } else {
    response.status = 404;
    response.body = { success: false, data: "Product does not exists" };
  }
};

// @desc delete a single product
// @route DELETE /api/v1/products/:id

export const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const { id } = params;
  products = products.filter((p) => p.id !== id);

  response.status = 200;
  response.body = { success: true, data: products };
};
