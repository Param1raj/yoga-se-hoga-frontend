import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CustomSnackbar from "@/src/components/Snackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VideoInput, addVideos } from "@/src/Utils/mutation/addVideo";
import { useSearchParams } from "next/navigation";
import { LoadingButton } from "@mui/lab";
import { Video } from "../tables/VideoTable";
import { updateVideo } from "@/src/Utils/mutation/updateVideo";

function VideoModal({
  open,
  onClose,
  forEditing,
}: {
  open: boolean;
  onClose: () => void;
  forEditing?: Video;
}) {
  const [OpenSuccess, setOpenSuccess] = useState(false);
  const [OpenError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const page = +searchParams.toString().split("=")[1];
  const queryClient = useQueryClient();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: async (data: VideoInput) => {
      return addVideos(data);
    },
    mutationKey: ["addVideo"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos", page] });
    },
  });
  // update function
  const {
    mutate: update,
    isLoading: updating,
    isError: updateError,
    isSuccess: updated,
  } = useMutation({
    mutationFn: async (data: Video) => {
      return updateVideo(data);
    },
    mutationKey: ["updateVideo"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos", page] });
    },
  });
  useEffect(() => {
    console.log(isError, "Error", isSuccess, "Success");
    if (isError || updateError) {
      setMessage(updateError ? "Failed to Update" : "Failed to Add");
      setOpenError(true);
    }
    if (isSuccess || updated) {
      console.log(".....success");

      setMessage(updated ? "Updated Successfully!" : "Created Successfully!");
      setOpenSuccess(true);
      reset();
      // onClose();
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [isError, isSuccess, updated, updateError]);
  const Submit = async (data: any) => {
    try {
      console.log(data, ":data we are getting for updated");
      !forEditing ? mutate(data) : update({ ...data, _id: forEditing._id });
      console.log(".....Intiated");
    } catch (error) {
      setMessage("Failed to Add");
      setOpenError(true);
    }
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        width={"50%"}
        height={"90vh"}
        sx={{
          background: "white",
          padding: "30px",
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // border={"1px solid red"}
      >
        <Box
          width={"80%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          pt={"30px"}
          height={"100%"}
        >
          {OpenSuccess && (
            <CustomSnackbar
              Open={OpenSuccess}
              varient={"success"}
              message={message}
              setOpen={() => {
                setOpenSuccess(false);
              }}
            />
          )}
          {OpenError && (
            <CustomSnackbar
              Open={OpenError}
              varient={"error"}
              message={message}
              setOpen={() => {
                setOpenError(false);
              }}
            />
          )}
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"2rem"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            color={"#5F2C70"}
          >
            {"Create a Video"}
          </Typography>

          <Stack
            spacing={"40px"}
            mt={"10px"}
            component={"form"}
            width={"100%"}
            paddingY={"20px"}
            onSubmit={handleSubmit(Submit)}
          >
            <Box width={"100%"}>
              <TextField
                label="Title"
                color="secondary"
                type="text"
                fullWidth
                defaultValue={forEditing && forEditing.title}
                {...register("title", { required: true })}
              />
              {errors.title && (
                <Typography component={"p"} color={"red"}>
                  * Title is missing here.
                </Typography>
              )}
            </Box>
            <Box width={"100%"}>
              <TextField
                label="Short Description"
                placeholder="Lorem Ipsum is simply dummy text of the printing ...."
                color="secondary"
                fullWidth
                {...register("Short_description", { required: true })}
                {...(forEditing && {
                  defaultValue: forEditing.Short_description,
                  focused: true,
                })}
              />
              {errors.Short_description && (
                <Typography component={"p"} color={"red"}>
                  * Short description is missing here.
                </Typography>
              )}
            </Box>
            <Box width={"100%"}>
              <TextField
                label="Long Description"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book........"
                multiline
                rows={5}
                fullWidth
                color="secondary"
                {...register("Long_description", { required: true })}
                {...(forEditing && {
                  defaultValue: forEditing.Long_description,
                  focused: true,
                })}
              />
              {errors.Long_description && (
                <Typography component={"p"} color={"red"}>
                  * Long description is missing here.
                </Typography>
              )}
            </Box>
            <Box width={"100%"}>
              <TextField
                label="Vide Link"
                placeholder="https://www.youtube.com/embed/videoId"
                color="secondary"
                fullWidth
                defaultValue={"https://www.youtube.com/embed/"}
                {...register("url", { required: true })}
                {...(forEditing && { defaultValue: forEditing.url })}
              />
              {errors.url && (
                <Typography component={"p"} color={"red"}>
                  * Video Link is missing here.
                </Typography>
              )}
            </Box>
            <Box width={"100%"}>
              <TextField
                label="Thumbnail"
                color="secondary"
                type="text"
                fullWidth
                {...register("thumbnail", { required: true })}
                {...(forEditing && { defaultValue: forEditing.thumbnail })}
              />
              {errors.title && (
                <Typography component={"p"} color={"red"}>
                  * Thumbnail is missing here.
                </Typography>
              )}
            </Box>
            <Box
              height={"50px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("isPaid")}
                    defaultChecked={forEditing?.isPaid}
                    color="secondary"
                  />
                }
                label="Paid"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("isSolution")}
                    sx={{ ml: "30px" }}
                    color="secondary"
                    defaultChecked={forEditing?.isSolution}
                  />
                }
                label="Solution"
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  color="secondary"
                >
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Category"
                  color="secondary"
                  {...register("category")}
                  {...(forEditing && { defaultValue: forEditing.category })}
                >
                  <MenuItem value={"Beginner"}>Beginner</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Advance"}>Advance</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  color="secondary"
                >
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Type"
                  color="secondary"
                  {...register("type")}
                  {...(forEditing && { defaultValue: forEditing.type })}
                >
                  <MenuItem value={"Yoga"}>Yoga</MenuItem>
                  <MenuItem value={"Meditation"}>Meditation</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              // border={"1px solid red"}
              height={"50px"}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <LoadingButton
                variant="contained"
                sx={{
                  marginRight: "10px",
                  background: "#5F2C70",
                  ":hover": {
                    background: "#5F2C70",
                  },
                }}
                type="submit"
                loading={isLoading || updating}
              >
                Save
              </LoadingButton>
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{
                  color: "#5F2C70",
                  border: "1px solid #5F2C70",
                  ":hover": {
                    border: "1px solid #5F2C70",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

export default VideoModal;
