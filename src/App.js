import Dashboard from "pages/Dashboard";
import DetailTodo from "pages/DetailTodo";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState(null);

  if (!activity)
    return (
      <Dashboard
        onClickActivity={(activity) => {
          setActivity(activity);
        }}
      />
    );

  return (
    <DetailTodo
      activityId={activity?.id}
      activityTitle={activity?.title}
      onClickBack={() => setActivity(null)}
    />
  );
}

export default App;
