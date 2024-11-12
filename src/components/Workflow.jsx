import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20" id="workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center mt-6 tracking-wide pb-3">
      Ab
        <span className="bg-gradient-to-r from-green-800 to-green-600 text-transparent bg-clip-text">
        out Us
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img className="md:mt-16 object-cover w-full" src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/03/The-Intersection-of-Archite.jpg" alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
