import Heading from "@/components/heading";
import React from "react";
import { methods } from "./constants";

const Glossary = () => {
  return (
    <div className="mt-4">
      <Heading title="Glossary" description="See the prompt and take help" />
      <div className="px-2 lg:px-4">
      {methods.map((method, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-2">{method.title}</h2>
            <p className="text-gray-700">{method.description}</p>
            {method.example && (
              <p className="mt-2 text-sm text-gray-600">
                <strong>Example:</strong> {method.example}
              </p>
            )}
            {method.steps && (
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {method.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
