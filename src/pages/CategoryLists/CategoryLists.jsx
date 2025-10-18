import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

function CategoryLists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);
  return (
    <div className="my-2">
      <h1 className="font-bold text-lg">Categories</h1>
      <div className="">
        {lists.map((list) => (
          <NavLink
            key={list.id}
            to={`/category/${list.id}`}
            className={({ isActive }) =>
              `mt-3 block hover:text-blue-500 ${
                isActive ? "text-blue-500 font-bold" : ""
              }`
            }
          >
            <p>{list.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CategoryLists;
