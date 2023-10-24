import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { addBlog } from "@/Utils/mutation/addBlog";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import CustomSnackbar from "@/components/Snackbar";
import { updateBlog } from "@/Utils/mutation/updateBlog";
import BlogType from "@/components/Blogs/Blog";
export type Blog = {
  imageUrl: string;
  heading: string;
  introduction: string[];
  blogContent: { heading: string; paragraphs: string[] }[];
};

class HeadingContent {
  heading: string = "";
  paragraphs: string[] = [""];
}

function ModalComp({
  open,
  onClose,
  forEdit,
}: {
  open: boolean;
  onClose: () => void;
  forEdit?: BlogType;
}) {
  const [OpenSuccess, setOpenSuccess] = useState(false);
  const [OpenError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm();
  const queryClient = new QueryClient();
  const searchParams = useSearchParams();

  const page = +searchParams.toString().split("=")[1];
  const [headingAndContentArray, setHeadingAndContentArray] = useState([
    new HeadingContent(),
    new HeadingContent(),
    new HeadingContent(),
    new HeadingContent(),
  ]);
  const { mutateAsync, isSuccess, isError, isLoading } = useMutation({
    mutationFn: async (data: Blog) => {
      return await addBlog(data);
    },
    mutationKey: ["addBlog"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs", page] });
    },
  });
  // update blogFunction.
  const {
    mutate: update,
    isError: updateError,
    isLoading: updating,
    isSuccess: updated,
  } = useMutation({
    mutationFn: async (data: any) => {
      return await updateBlog(data);
    },
    mutationKey: ["updateBlog"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
  useEffect(() => {
    if (isError || updateError) {
      setMessage(forEdit ? "Failed to Update" : "Failed to Add");
      setOpenError(true);
    }
    if (isSuccess || updated) {
      console.log(".....success");

      setMessage(forEdit ? "Updated Successfully!" : "Created Successfully!");
      setOpenSuccess(true);
      reset();
      // onClose();
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [isSuccess, isError, updateError, updated]);

  // FIXME:  Optimize it more.
  const Submit = async (data: any) => {
    let blogContent = [];
    const imageUrl = data.imageUrl;
    const heading = data.heading;
    const introduction = data.introduction.split("\n");
    blogContent = headingAndContentArray.map((_, index) => {
      return {
        heading: data[`heading${index + 1}`],
        paragraphs: data[`paragraph${index + 1}`].split("\n"),
      };
    });
    try {
      forEdit
        ? update({
            _id: forEdit._id,
            imageUrl,
            introduction,
            heading,
            blogContent,
          })
        : await mutateAsync({ imageUrl, introduction, heading, blogContent });
    } catch (error) {
      console.log(error, "error");
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
        height={"75vh"}
        sx={{
          background: "white",
          padding: "50px",
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
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
          {"Create a blog"}
        </Typography>
        <Stack
          spacing={"20px"}
          mt={"10px"}
          component={"form"}
          //   height={"100%"}
          // border={"1px solid red"}
          paddingY={"20px"}
          onSubmit={handleSubmit(Submit)}
        >
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"1.3rem"}
            fontFamily={"Nunito"}
            color={"#5F2C70"}
          >
            Header
          </Typography>
          {/* <Button
            variant="outlined"
            onClick={() => {
              HeadingAndContentArray.push(1);
              alert(HeadingAndContentArray.length);
            }}
          >
            Add
          </Button> */}
          <TextField
            fullWidth
            label="Your Image url"
            placeholder="https://someimage.org.com/image"
            {...(forEdit && { defaultValue: forEdit.imageUrl })}
            {...register("imageUrl", { required: true })}
          />
          <TextField
            fullWidth
            label="Heading of your blog"
            placeholder="Solution to daily life problems"
            {...(forEdit && { defaultValue: forEdit.heading })}
            {...register("heading", { required: true })}
          />
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"1.3rem"}
            fontFamily={"Nunito"}
            color={"#5F2C70"}
          >
            Introduction
          </Typography>
          <TextField
            fullWidth
            rows={4}
            label="Give an intro to your blog"
            multiline
            {...(forEdit && { defaultValue: forEdit.introduction.join("\n") })}
            {...register("introduction", { required: true })}
          />
          <Box
            // border={"1px solid red"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
              fontWeight={"bold"}
              fontSize={"1.3rem"}
              fontFamily={"Nunito"}
              color={"#5F2C70"}
            >
              Content
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginRight: "10px",
                background: "#5F2C70",
                ":hover": {
                  background: "#5F2C70",
                },
              }}
              onClick={() => {
                const array = [...headingAndContentArray, new HeadingContent()];
                setHeadingAndContentArray(array);
                // alert(headingAndContentArray.length);
              }}
            >
              <AddIcon />
            </Button>
          </Box>

          {(forEdit ? forEdit.blogContent : headingAndContentArray).map(
            (data, index) => {
              return (
                <>
                  <TextField
                    fullWidth
                    label={`Heading ${index + 1}`}
                    {...(forEdit && {
                      defaultValue: data.heading,
                    })}
                    {...register(`heading${index + 1}`, { required: true })}
                  />
                  <TextField
                    fullWidth
                    rows={4}
                    label={`Content for above heading ${index + 1}`}
                    multiline
                    {...(forEdit && {
                      defaultValue: data.paragraphs,
                    })}
                    {...register(`paragraph${index + 1}`, { required: true })}
                  />
                </>
              );
            }
          )}
          <Box
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
              disabled={false}
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
    </Modal>
  );
}

export default ModalComp;
