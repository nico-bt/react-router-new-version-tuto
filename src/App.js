import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/careers" element={<CareersLayout />} errorElement={<CareersError />} >
        <Route 
          index 
          element={<Careers />} 
          // Loader es una funcion que corre para cargar data antes de que cargue el component.
          // Pasa la data al component con el useLoaderData() hook
          loader={careersLoader}
        />
        <Route 
          path=":id" 
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      {/* Si no matchea con ninguna de las routes anteriores. Render dentro de RootLayout */}
      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
