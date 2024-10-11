import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Route/Route.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <AuthProviders>
        <div className="max-w-screen-xl mx-auto">
           <RouterProvider router={routes}></RouterProvider>
        </div>
      </AuthProviders>
    </ChakraProvider>
  </StrictMode>
);
