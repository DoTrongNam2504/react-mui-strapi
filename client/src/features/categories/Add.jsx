import HeaderBread from "../../components/pages/HeaderBread";
import FlexBetween from "../../components/common/Flexbetween";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { useTheme, Typography, Stack, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import PhotoSizeSelectLargeSharpIcon from "@mui/icons-material/PhotoSizeSelectLargeSharp";
import Container from "@mui/material/Container"; // or
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addCategories } from "../categories/categorySlice";
import { useDispatch } from "react-redux";
const AddCategory = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    description: "",
    files: "",
    publish: true,
  };
  const [category, setCategory] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSwitchChange = (event) => {
    setCategory((prevState) => ({
      ...prevState,
      publish: event.target.checked,
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const updatedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setCategory((prevState) => ({
        ...prevState,
        files: updatedFiles,
      }));
    },
  });

  useEffect(() => {
    return () => URL.revokeObjectURL(category.files.preview);
  }, [category.files]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("gọi đến hàm submit rồi");
    console.log("Data trước dispatch", category);
    
    dispatch(addCategories(category, "categories"));
    console.log("Add xong rồi");
    setCategory(initialState);
    console.log("sau dispatch", category);
  };
  return (
    <Box style={{ marginBottom: "50px" }}>
      <Container>
        <FlexBetween>
          <HeaderBread page="Category" action="Create" />
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/category")}
          >
            Back To List
          </Button>
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
                  onSubmit={handleSubmitForm}
                >
                  <TextField
                    fullWidth
                    name="name"
                    variant="outlined"
                    label="Category Name"
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    name="description"
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={6}
                    label=" Description"
                    style={{ marginTop: "0px" }}
                    required
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
                      {"Image "}
                    </Typography>

                    <Box>
                      <Box
                        {...getRootProps({ className: "dropzone" })}
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
                          multiple={true}
                          name="files"
                          {...getInputProps()}
                          required
                        />

                        <Stack
                          sx={{
                            display: "flex",
                            flexFlow: "column wrap",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            WebkitBoxPack: "center",
                            justifyContent: "center",
                          }}
                        >
                          {category.files !== "" && category.files ? (
                            <>
                              <Stack
                                sx={{
                                  maxWidth: "200px",
                                  height: "100%",
                                  width: "100%",
                                }}
                                key={category.files.name}
                              >
                                <img
                                  src={category.files.preview}
                                  onLoad={() => {
                                    URL.revokeObjectURL(category.files.preview);
                                  }}
                                />
                              </Stack>
                            </>
                          ) : (
                            <>
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
                            </>
                          )}
                        </Stack>
                      </Box>
                    </Box>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid item md={4}></Grid>
            <Grid item xs={12} md={8}>
              <FlexBetween
                component="form"
                spacing={2}
                noValidate
                autoComplete="off"
                gap={2}
                onSubmit={handleSubmitForm}
              >
                <FormControlLabel
                  control={
                    <Switch
                      defaultChecked
                      onChange={handleSwitchChange}
                      color="secondary"
                      name="publish"
                    />
                  }
                  label="Publish"
                />

                <Button variant="contained" type="submit">
                  Create Category
                </Button>
              </FlexBetween>
            </Grid>
          </Grid>
        </FormControl>
      </Container>
    </Box>
  );
};

export default AddCategory;
