import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AppNavigation from "./components/AppNavigation";

import DashboardPage from "./pages/DashboardPage";
import WorkItemsPage from "./pages/WorkItemsPage";
import CreateWorkItemPage from "./pages/CreateWorkItemPage";
import WorkItemDetailsPage from "./pages/WorkItemDetailsPage";
import MyWorkPage
    from "./pages/MyWorkPage";
import UnassignedPage from "./pages/UnassignedPage";

function App() {
  return (
    <BrowserRouter>

      <AppNavigation />

      <Routes>

        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/workitems"
          element={<WorkItemsPage />}
        />

        <Route
          path="/workitems/new"
          element={<CreateWorkItemPage />}
        />

        <Route
          path="/workitems/:id"
          element={<WorkItemDetailsPage />}
        />

        <Route
          path="/mywork"
          element={<MyWorkPage />}
        />

        <Route
          path="/Unassigned"
          element={<UnassignedPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;