import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero mt-14 flex flex-wrap justify-between items-center w-[90vw] mx-auto">
      <div className="py-8 md:py-12 md:w-1/2 ">
        <h1 className="text-4xl font-semibold">
          Everything is
          <br />
          better with a&nbsp;
          <span className="text-primary">Good Meal</span>
        </h1>
        <p className="my-6 text-gray text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life. There is nothing quite like the satisfaction of
          a warm, cheesy slice fresh out of the oven.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-snow text-black uppercase items-center gap-2  px-4 py-2 rounded-full">
            Order now
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative md:w-1/2 md:block hidden">
        <Image
          src={"/pizza.png"}
          width={500}
          height={500}
          className="w-72 h-auto ml-auto mr-14"
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
