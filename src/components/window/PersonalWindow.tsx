import { WindowType } from "@/type";
import withWindow from "../hoc/WrappedWindow";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Work from "./Work";

const PersonalWindow = ({ window }: { window: WindowType }) => {
  const [current, setCurrent] = useState<string | null>("About Me");

  const handleNav = () => {
    if (current === "About Me") {
      setCurrent("Work");
    } else if (current === "Work") {
      setCurrent("About Me");
    }
  };

  return (
    <div className="flex w-full">
      <div className="">
        <Sidebar onClick={handleNav} current={current} />
      </div>

      <div className="layout bg-gray-400/20 w-full rounded-sm p-1">
        {current === "About Me" ? (
          <div className="max-w-2xl p-2 antialiased">
            <h1 className="text-xl ">Lwin Min Thein — Software Engineer</h1>
            <p className="font-light text-sm text-balance">
              <ul className="list-disc px-2 py-1.5">
                <li>
                  Software Engineer with experience in full-stack web and
                  application development
                </li>

                <li>
                  Strong in React, Java, SQL, and RESTful backend system design
                </li>
                <li>
                  Comfortable with Git, Linux CLI, and modern development
                  workflows
                </li>
                <li>
                  Focused on clean architecture, performance optimization, and
                  maintainable code
                </li>
                <li>
                  Actively improving English and Japanese (JLPT N3) for
                  international career opportunities
                </li>
              </ul>
            </p>
          </div>
        ) : (
          <Work />
        )}
      </div>
    </div>
  );
};

export default withWindow(PersonalWindow);
