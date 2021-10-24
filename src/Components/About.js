import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Todos List</title>
      </Helmet>
      <div className="about-text container my-5">
        <h4 className="text-center">
          This is a Todos application developed by Yashodhar Patel.
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          asperiores nostrum est nemo incidunt beatae aliquam rerum
          necessitatibus! Eos, a molestias. Porro, assumenda illo nam numquam
          unde velit non nisi aperiam a alias odio ratione. Hic a, dolores
          debitis possimus assumenda fugiat amet, culpa aliquam maiores commodi
          ab ea necessitatibus.
        </p>
      </div>
    </>
  );
}