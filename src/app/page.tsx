"use client";
import { FormEvent, useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

type Note = {
  title?: string;
  content?: string;
};
export default function Home() {
  const [takeNote, setTakeNote] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newNote = {
      title,
      content,
    };

    setNotes([...notes, newNote]);

    console.log(newNote);
    setTitle("");
    setContent("");
  };
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

        <div className="mt-4  mb-20 shadow-md min-w-[80vw] sm:min-w-[50vw] md:min-w-[30vw] h-auto  p-3 rounded relative ">
          <form onSubmit={handleSubmit}>
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                      className=" bg-transparent placeholder:text-slate-400 text-black text-md focus:outline-none  p-2"
                    />

                    <TextareaAutosize
                      placeholder="Take a note ...."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
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
                  <span className="text-xs text-slate-400">
                    Take a note ...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className={` absolute -bottom-4 right-5 rounded-full bg-yellow-500 p-1.5 inline-flex items-center justify-center`}
              style={{ width: "30px", height: "30px" }}
            >
              <Plus color="#fff" size={60} />
            </button>
          </form>
        </div>

        {notes && (
          <div className=" w-full py-3 px-2 grid grid-cols-4 gap-4">
            {notes.map((note) => (
              <div
                key={note?.title!}
                className="bg-yellow-300 flex flex-col gap-3 p-4 rounded-md"
              >
                <h4 className="text-md font-semibold ">{note?.title!}</h4>
                <p className="text-sm">{note?.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
