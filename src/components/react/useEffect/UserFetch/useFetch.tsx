import React, { useState } from "react";
import { useFetch } from "./Data";

function UsersFetch() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const data = useFetch<Array<{ id: number; name: string }>>(url);

  return (
    <div>
      <button
        className="user-fetch-button"
        onClick={() => setUrl(url + "?_limit=5")}
      >
        Fetch only 5 users
      </button>
      {data.status === "loading" && <p>Loading...</p>}
      {data.status === "success" && (
        <ul className="user-fetch-data-bg">
          {data.data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      {data.status === "error" && <p>Error: {data.error?.message}</p>}
    </div>
  );
}

export default UsersFetch;
