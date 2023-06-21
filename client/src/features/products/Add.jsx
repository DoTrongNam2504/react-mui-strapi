import HeaderBread from "../../components/pages/HeaderBread";
import Chip from "@mui/material/Chip";
import FlexBetween from "../../components/common/Flexbetween";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import {
  useTheme,
  styled,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PhotoSizeSelectLargeSharpIcon from "@mui/icons-material/PhotoSizeSelectLargeSharp";
import Container from "@mui/material/Container"; // or
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

const AddProduct = () => {
  const theme = useTheme();

  const ReactQuillContainer = styled("div")(() => ({
    "& .ql-container.ql-snow": {
      " borderBottomLeftRadius": "8px",
      borderBottomRightRadius: "8px",
    },

    /* Snow Theme */
    "& .ql-toolbar.ql-snow": {
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      color: "#fff",
    },

    "& .ql-snow .ql-stroke": {
      stroke: "#fff",
    },
    "& .ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill": {
      fill: "#fff",
    },
    ".ql-snow .ql-picker": {
      color: "#fff",
    },
    "& .ql-editor": {
      minHeight: "200px",
      maxHeight: "660px",
    },
  }));
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <Box style={{ marginBottom: "50px" }}>
      <Container>
        <FlexBetween>
          <HeaderBread page="Product" action="Create" />
        </FlexBetween>
        <FormControl style={{ width: "100%", height: "100%" }}>
          <Grid container spacing={2} sx={{ width: "100%" }} mt={5}>
            <Grid item md={4}>
              <Typography variant="h5" fontWeight="bold">
                Details
              </Typography>
              <Typography variant="body1" display={"block"} mt={1}>
                Title, short description, image...
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                style={{
                  padding: " 20px ",
                  borderRadius: "10px",
                  backgroundColor: `${theme.palette.background.alt}`,
                }}
              >
                <Stack
                  component="form"
                  spacing={2}
                  noValidate
                  autoComplete="off"
                  gap={2}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Product Name"
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Sub Description"
                    style={{ marginTop: "0px" }}
                  />
                  <Stack
                    borderRadius="8px"
                    gap={2}
                    style={{ marginTop: "0px" }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      display={"block"}
                    >
                      {"Content "}
                    </Typography>
                    <Box>
                      <ReactQuillContainer>
                        <ReactQuill modules={modules} formats={formats} />
                      </ReactQuillContainer>
                    </Box>
                  </Stack>
                  <Stack
                    borderRadius="8px"
                    gap={2}
                    style={{ marginTop: "0px" }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      display={"block"}
                    >
                      {"Image "}
                    </Typography>
                    <Box>
                      <Box
                        sx={{
                          padding: "40px",
                          outline: "none",
                          borderRadius: "8px",
                          cursor: "pointer",
                          overflow: "hidden",
                          position: "relative",
                          backgroundColor: "rgba(145, 158, 171, 0.08)",
                          border: "1px dashed rgba(145, 158, 171, 0.2)",
                          transition:
                            "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                        <Stack
                          gap={2}
                          sx={{
                            display: "flex",
                            flexFlow: "column wrap",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            WebkitBoxPack: "center",
                            justifyContent: "center",
                          }}
                        >
                          <PhotoSizeSelectLargeSharpIcon
                            sx={{
                              maxWidth: "200px",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                          <Stack textAlign={"center"} gap={2}>
                            <Typography variant="h5" fontWeight="bold">
                              Drop or Select file
                            </Typography>
                            <Typography variant="body2">
                              Drop files here or click browse thorough your
                              machine
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Box>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid item md={4}>
              <Typography variant="h5" fontWeight="bold">
                Properties
              </Typography>
              <Typography variant="body1" display={"block"} mt={1}>
                Additional functions and attributes...
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                style={{
                  padding: " 20px ",
                  borderRadius: "10px",
                  backgroundColor: `${theme.palette.background.alt}`,
                }}
              >
                <Stack
                  component="form"
                  spacing={2}
                  noValidate
                  autoComplete="off"
                  gap={2}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Stock" defaultValue="0" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      Autocomplete
                       
                    </Grid>
                  </Grid>

                  <Stack>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Gender
                    </Typography>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="kids"
                        control={<Radio />}
                        label="Kids"
                      />
                    </RadioGroup>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid item md={4}>
              <Typography variant="h5" fontWeight="bold">
                Pricing
              </Typography>
              <Typography variant="body1" display={"block"} mt={1}>
                Price related inputs
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                style={{
                  padding: " 20px ",
                  borderRadius: "10px",
                  backgroundColor: `${theme.palette.background.alt}`,
                }}
              >
                <Stack
                  component="form"
                  spacing={2}
                  noValidate
                  autoComplete="off"
                  gap={2}
                >
                  <TextField
                    id="outlined-uncontrolled"
                    label="Regular price"
                    defaultValue="0"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Sale price"
                    defaultValue="0"
                  />
                </Stack>
              </Paper>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item xs={12} md={8}>
              <FlexBetween>
                <FormControlLabel control={<Switch />} label="Publish" />
                <Button variant="contained">Create Product</Button>
              </FlexBetween>
            </Grid>
          </Grid>
        </FormControl>
      </Container>
    </Box>
  );
};

export default AddProduct;
