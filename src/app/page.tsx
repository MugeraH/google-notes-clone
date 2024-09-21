"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
const notes = [{ name: "hughes" }];

export default function Home() {
  const [takeNote, setTakeNote] = useState(false);
  return (
    <main className="min-h-screen bg-white ">
      <section className="my-4 flex flex-col justify-center items-center gap-2 ">
        {notes.length >= 1 ? (
          <h4 className="text-sm text-slate-600">
            showing {notes.length} notes in DB
          </h4>
        ) : (
          <h4 className="text-sm text-slate-600">Empty</h4>
        )}

        <div className="my-4 shadow-md min-w-[80vw] sm:min-w-[50vw] md:min-w-[30vw] h-auto  p-3 rounded relative ">
          <AnimatePresence mode="wait">
            {takeNote ? (
              <motion.div
                key="input-div"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {" "}
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Title"
                    className=" bg-transparent placeholder:text-slate-400 text-black text-md focus:outline-none  p-2"
                  />

                  <TextareaAutosize
                    placeholder="Take a note ...."
                    className=" bg-transparent placeholder:text-slate-400 text-black text-sm focus:outline-none  p-2 
                     
                "
                  />
                  {/* <textarea
                    aria-multiline
                    placeholder="Take a note ...."
                    className=" bg-transparent placeholder:text-slate-400 text-black text-sm focus:outline-none  p-2 
                     
                "
                  /> */}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="label-div"
                onClick={() => setTakeNote(true)}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {" "}
                <span className="text-xs text-slate-400">Take a note ...</span>
              </motion.div>
            )}
          </AnimatePresence>

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
