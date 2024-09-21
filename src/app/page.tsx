import Image from "next/image";
import { Plus } from "lucide-react";

const notes = [{ name: "hughes" }];

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
      <section className="my-4 flex flex-col justify-center items-center gap-2 ">
        {notes.length >= 1 ? (
          <h4 className="text-sm">showing {notes.length} notes in DB</h4>
        ) : (
          <h4 className="text-sm">Empty</h4>
        )}

        <div className="my-4 shadow-md min-w-[80vw] sm:min-w-[50vw] md:min-w-[30vw]   p-3 rounded relative ">
          {" "}
          <span className="text-xs text-slate-400">Take a note ...</span>
          <div
            className={` absolute -bottom-4 right-5 rounded-full bg-yellow-500 p-1.5 inline-flex items-center justify-center`}
            style={{ width: "30px", height: "30px" }}
          >
            <Plus color="#fff" size={60} />
          </div>
        </div>

        <div className="my-4 shadow-md min-w-[80vw] sm:min-w-[50vw] md:min-w-[30vw]   p-3 rounded relative ">
          {" "}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title"
              className=" bg-transparent placeholder:text-slate-400 text-black text-md focus:outline-none  p-2"
            />
            <input
              type="text"
              placeholder="Take a note ...."
              className=" bg-transparent placeholder:text-slate-400 text-black text-sm focus:outline-none  p-2"
            />
          </div>
          <div
            className={` absolute -bottom-4 right-5 rounded-full bg-yellow-500 p-1.5 inline-flex items-center justify-center`}
            style={{ width: "30px", height: "30px" }}
          >
            <Plus color="#fff" size={60} />
          </div>
        </div>
      </section>
    </main>
  );
}
