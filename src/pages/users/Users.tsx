import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Profielfoto",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Telefoon",
    type: "number",
    width: 160,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Aangemaakt op",
    type: "string",
    width: 160,
    editable: true,
  },

  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then((res) => res.json()),
  });
  return (
    <div className="users">
      <div className="info">
        <h1>Gebruikers</h1>
        <button onClick={() => setOpen(true)}>Nieuwe gebruiker</button>
      </div>
      {isLoading ? (
        "loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
