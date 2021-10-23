import Dashboard from "pages/Dashboard";
import DetailTodo from "pages/DetailTodo";
import { useState } from "react";

const pages = {
  dashboard: 1,
  detail: 2,
};
function App() {
  const [page, setPage] = useState(pages.dashboard);

  if (page === pages.dashboard) return <Dashboard />;

  return <DetailTodo />;
}

export default App;
