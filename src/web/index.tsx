import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import ZipData from "./assets/zipdata.json";

import { Dashboard } from "./Dashboard";
import { Loading } from "./Loading";
import { TopBar } from "./components";
import { Models } from "./Pages";

const Page404 = () => {
  return (
    <>
      <h2>
        ページが見つかりません
        <br />
        なぜこのエラーが起きたのでしょう...
      </h2>
    </>
  );
};

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <HashRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/models" element={<Models />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

document.ondragover =
  document.ondragenter =
  document.ondrop =
  document.ondragleave =
    (e) => {
      if (e.type == "drop") {
        const files = e.dataTransfer.files;
        dandd(files);
      }
      e.preventDefault();
    };

function dandd(data: object) {
  console.log(data);
  Object.keys(data).forEach((key: string) => {
    console.log(key, data[key]);
    addfile(data[key]);
  });

  function addfile(data: object) {
    const zipinfo = ZipData.find((v) => v.name === data.name);
    console.log(zipinfo)
  }
}
