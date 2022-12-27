import React, {useState} from "react";
import "./AllUsers.css";
import AllUser from "./AllUser";
import AllStudent from "./AllStudent";

const AllUserMain = () => {
    const [active, setActive] = useState("")
  return (
    <div className="Allusers">
      <div className="but">
        <button onClick={() => setActive("Alluser")}>All Collage Stafs</button>
        <button onClick={() => setActive("AllStudent")}>All Collage Students</button>
      </div>
      <div className="comp">
        {active === "Alluser" && <AllUser />}
        {active === "AllStudent" && <AllStudent />}
      </div>
    </div>
  );
};

export default AllUserMain;
