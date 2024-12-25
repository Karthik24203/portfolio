import Header from "@/app/_components/Header";
import React from "react";

function ProjectLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="font-BeVietnamPro mt-12">{children}</div>
    </div>
  );
}

export default ProjectLayout;
