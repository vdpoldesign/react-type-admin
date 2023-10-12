import { useState } from "react";
import "./products.scss";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Afbeelding",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },

  {
    field: "title",
    headerName: "Titel",
    width: 150,
    type: "string",
  },
  {
    field: "color",
    headerName: "Kleur",
    width: 150,
    type: "string",
  },
  {
    field: "price",
    headerName: "Prijs",
    type: "string",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Fabrikant",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Aangemaakt op",
    type: "string",
    width: 160,
  },

  {
    field: "inStock",
    headerName: "Voorraad",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Producten</h1>
        <button onClick={() => setOpen(true)}>Nieuw product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};
export default Products;
