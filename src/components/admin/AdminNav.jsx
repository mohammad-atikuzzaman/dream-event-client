import { Link } from "react-router";
import { menuOptions } from "../../utils/adminMenu";

const AdminNav = () => {
  return (
    <aside className="bg-[#043341] text-gray-100 min-h-screen px-4">
      <ul className="mt-10">
        <li><h2 className="text-center text-2xl font-semibold mb-12">Dream Event</h2></li>
        {menuOptions.map((m, i) => (
          <li className="bg-gray-600 m-2 px-2 rounded" key={i}>
            <Link className="text-bold" to={m.path}>
              {m.show}
            </Link>
          </li>
        ))}
      </ul>
      <hr className=" my-4"/>
      <Link to="/">
        <button className="bg-white mx-auto px-2 w-[86%] rounded-sm text-gray-600 font-semibold ">Home</button>
      </Link>
    </aside>
  );
};

export default AdminNav;
