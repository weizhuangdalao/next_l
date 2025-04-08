"use client";
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  (async () => {
    const { id } = await params;
    const current = products.find((item) => item.id === Number(id))!;
    return (
      <div
        className="fixed inset-0 bg-gray-500/60 flex flex-col items-center justify-center"
        onClick={() => {
          router.back();
        }}
      >
        <Image
          width={300}
          height={300}
          src={current?.imageSrc}
          alt={current?.imageAlt}
          className="rounded-lg mx-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></Image>
        <div className="mt-5 p-10 border-1 rounded-l-lg">
          <h1>{current.name}</h1>
          <p>{current.imageAlt}</p>
          <p>price: {current.price}</p>
        </div>
      </div>
    );
  })();
}
