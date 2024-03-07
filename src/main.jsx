import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./Error-page";
import Root from "./Root";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavorite,
} from "./actions/contactsActions";
import "./index.css";
import { getContactLoader, loader } from "./loaders/contactsLoader";
import Index from "./routes/Index";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: loader,
//     action: createContactAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Index />,
//           },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: getContactLoader,
//             action: updateContactFavorite,
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: getContactLoader,
//             action: editContactAction,
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: deleteContactAction,
//             errorElement: (
//               <p>Sorry, an unexpected error has occurred in deleting post.</p>
//             ),
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={loader}
      action={createContactAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={getContactLoader}
          action={updateContactFavorite}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={getContactLoader}
          action={editContactAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={deleteContactAction}
          errorElement={
            <p>Sorry, an unexpected error has occurred in deleting post.</p>
          }
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
