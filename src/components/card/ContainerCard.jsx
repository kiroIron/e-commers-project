import React from "react";
import Card from "./Card";
import useFetch from "../../hooks/useFetch";
import CardSkeleton from "./CardSkeleton";
import { CircleX } from "lucide-react";

const ContainerCard = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useFetch("https://fakestoreapi.com/products");
  if (isLoading) {
    return (
      <section className="p-8 w-screen  overflow-hidden flex justify-center items-start gap-8 flex-wrap">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </section>
    );
  }

  if (isError) {
    return (
      <section className=" w-screen  overflow-hidden flex justify-center items-start  flex-wrap">
        <article className="w-full h-screen bg-[#333]  flex flex-col justify-center items-center  gap-10 p-4">
          <CircleX color="red" size={220} />
          <h1 className="text-white text-5xl">ERROR</h1>
        </article>
      </section>
    );
  }
  return (
    <>
      <section className="p-8 w-full overflow-hidden   flex justify-center items-start gap-8 flex-wrap">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ContainerCard;
