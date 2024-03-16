import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4 flex flex-wrap justify-center items-center w-[90vw] mx-auto">
      <div className="py-8 md:py-12 md:w-1/2 ">
        <h1 className="text-4xl font-semibold">
          Everything is
          <br />
          better with a&nbsp;
          <span className="text-primary">Good Meal</span>
        </h1>
        <p className="my-6 text-gray text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life. There's nothing quite like the satisfaction of
          a warm, cheesy slice fresh out of the oven.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-red uppercase items-center gap-2  px-4 py-2 rounded-full">
            Order now
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative md:w-1/2 mt-14">
        <Image
          src={"/2.png"}
          width={300}
          height={300}
          className="w-72 h-auto ml-64"
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
