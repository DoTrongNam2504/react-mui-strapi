import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "../theme";
import { useMemo } from "react";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import Product from "../features/products/Index";
import AddProduct from "../features/products/Add";
import Category from '../features/categories/Index';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element = {<Layout/>}>
              <Route path= "/" element = {<Navigate to ="/products"/>} replace />
              <Route path = "/products" element = {<Product/> } />
              <Route path = "/product/add" element = {<AddProduct/> } />
              <Route path = "/category" element = {<Category/> } />
            </Route>  
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
