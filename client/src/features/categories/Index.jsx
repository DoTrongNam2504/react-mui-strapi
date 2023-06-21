import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import HeaderBread from "../../components/pages/HeaderBread";
import FlexBetween from "../../components/common/Flexbetween";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import ShowAction from "../../components/pages/ShowAction";
import Container from "@mui/material/Container";
import { fetchCategories } from "./categorySlice";

const columns = [
  { field: "id", headerName: "CategoryID", flex: 0.5 },
  {
    field: "image",
    headerName: "Category Image",
    type: "image",
    flex: 0.5,
    editable: true,
    renderCell: (params) => {
      const imageUrl = params.row.attributes.image.data.attributes?.url;
      return (
        <Box
          component="img"
          sx={{
            height: 70,
            width: 70,
            maxHeight: { xs: 70, md: 50 },
            maxWidth: { xs: 70, md: 50 },
          }}
          alt="Product image !"
          src={`http://localhost:1337${imageUrl}`}
        />
      );
    },
  },
  {
    field: "name",
    headerName: "Category Name",
    valueGetter: (params) => {
      const name = params.row.attributes?.name;
      return name !== "" ? name : "No name";
    },
    flex: 1,
    editable: true,
  },
 

  {
    field: "publish",
    headerName: "Publish",
    valueGetter: (params) => {
      const status = params.row.attributes?.publish;
      if (status) {
        return "Published";
      }
      return "Draft";
    },
    flex: 0.5,
    editable: true,
  },
  {
    field: "Action",
    flex: 1,
    renderCell: (params) => {
      return <ShowAction params={params} />;
    },
  },
];

const Category = () => {
  const categories = useSelector((state) => state.category.categories);
  const loading = useSelector((state) => state.category.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories("categories"));    
  }, [dispatch]);

  const navigate = useNavigate();

  {
    if (loading) return <h2>Loading</h2>;
  }
  return (
    <Box p={3}>
      <Container>
        <FlexBetween>
          <HeaderBread page="Category" action="List" />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate("/product/add")}
          >
            Add New
          </Button>
        </FlexBetween>
        <Box sx={{ width: "100%" }} mt={5}>
          {categories && categories.length !== 0 && (
            <DataGrid
              autoHeight={true}
              rowHeight={80}
              rows={categories.data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
             
            ></DataGrid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Category;
