import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Paginated = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        skip: 0,
        limit: 4,
    })
    const skip = parseInt(searchParams.get("skip") || 0);
    const limit = parseInt(searchParams.get("limit") || 0);
    const q = searchParams.get('q') || ''
    const category = searchParams.get("category") || ""



    const handleMove = (moveCount) => {
        setSearchParams((prev) => {
            prev.set("skip", Math.max(skip + moveCount, 0));
            return prev;
        });
    };

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const data = await fetch(`https://dummyjson.com/products/categories`).then((res) => res.json());
            return data
        },
    });

    const { data: products, isLoading } = useQuery({
        queryKey: ["products", limit, skip, q, category],
        queryFn: async () => {
            let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`

            if (category) {
                url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
            }
            const data = await fetch(url).then((res) => res.json());
            return data
        },
        placeholderData: keepPreviousData,
        staleTime: 10000
    });

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Paginated Page
                </h2>

                <div className="flex gap-2 my-2">
                    <input
                        onChange={debounce(
                            (e) => {
                                setSearchParams((prev) => {
                                    prev.set('skip', 0)
                                    prev.delete("category")
                                    prev.set('q', e.target.value)
                                    return prev
                                })
                            }, 500)}
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Iphone"
                        className="block w-full ring-1 ring-inset ring-gray-300 border-0 focus:ring-1 pl-5 focus:ring-inset focus:ring-indigo-900 text-gray-900 placeholder:text-gray-400 p-1.5 sm:text-sm sm:leading-6 "
                    />

                    <select name="" id="" className="border p-2" onChange={(e) => {

                        setSearchParams((prev) => {
                            prev.set("skip", 0)
                            prev.delete("q")
                            prev.set("category", e.target.value)
                            return prev
                        })

                    }}>
                        <option value="">Select Category</option>
                        {
                            categories?.map((item) => (
                                <option value={item.slug} key={item.name}>
                                    {item.slug}

                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products?.products?.map((product) => (
                        <div key={product.id} className="group relative">
                            <img
                                alt={product.title}
                                src={product.thumbnail}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={`/products/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.category}
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isLoading ? (
                ""
            ) : (
                <div className="flex gap-2 ml-[45%] mb-5">

                    <button
                        disabled={skip < limit}
                        onClick={() => handleMove(-4)}
                        className={`bg-blue-700 text-white px-6 py-2 p-8 rounded shadow-md font-medium text-lg`}
                    >
                        Prev
                    </button>

                    <button
                        disabled={limit + skip >= products.total}
                        onClick={() => handleMove(4)}
                        className="bg-blue-700 text-white px-6 py-2 p-8 rounded shadow-md font-medium text-lg"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Paginated;
