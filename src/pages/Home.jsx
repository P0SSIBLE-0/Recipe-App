import React, { useContext } from "react";
import { recipeContext } from "../context/recipeContext";
import Card from "../components/Card";
import Loader from "../components/Loader";

function Home() {
  const { search, setSearch, handleSubmit, recipeData, loading } =
    useContext(recipeContext);

  if (loading) {
    <Loader />;
  }
  return (
    <div>
      <div className="relative w-full bg-white my-4">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 bg-[url(https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1060&t=st=1707208599~exp=1707209199~hmac=76817114d14e0305c0517ffd66c4bcc15625ef8db59beaa88fd87f70778b2013)] bg-no-repeat bg-cover bg-opacity-85">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 md:w-1/2 lg:w-full">
            {/* <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">We&apos; hiring</p>
            </div>
            <p className="text-sm font-medium">Join our team &rarr;</p>
          </div> */}
            <h1 className="mt-8 text-center lg:text-left md:text-left text-4xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
              Adventure of{" "}
              <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Delicacies
              </span>
            </h1>
            <p className="mt-8 text-sm lg:text-lg text-gray-300 text-center lg:text-left md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!
            </p>
            <form
              className="mt-8 flex items-start space-x-2"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="w-full lg:w-fit">
                <input
                  className="flex w-full rounded-md border border-black/30 px-3 py-1.5 font-semibold placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
                <button
                  type="button"
                  className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange tracking-widest m-auto ml-[-8px] lg:ml-0 md:ml-0"
                  onClick={(e) => handleSubmit(e)}
                >
                  Search
                </button>
            </form>
          </div>
          {/* <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
              src="https://images.unsplash.com/photo-1615719413546-198b25453f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div> */}
        </div>
      </div>
      { recipeData && recipeData.length <= 0 ? (
          <div>
            <p className="text-3xl lg:text-4xl font-extrabold text-black ">Nothing to show. please search somthing!</p>
          </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center my-4">
          {recipeData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
