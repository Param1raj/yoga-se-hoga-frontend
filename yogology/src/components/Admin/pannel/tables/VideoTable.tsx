import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Alert,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Skeleton,
  Snackbar,
  Typography,
} from "@mui/material";
// import ThreePIcon from "@mui/icons-material/ThreeP";
import AddIcon from "@mui/icons-material/Add";
// import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
// import { All_Video } from "../../../../../apis.";
import { AuthContext, AuthContextType } from "@/src/app/AuthProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getVideos } from "@/src/Utils/query/getVideos";
import imageUrl from "@/assets/images/errors.webp";
import { deleteVideo } from "@/src/Utils/mutation/deleteVideo";
import VideoModal from "../Modals/VideoModal";
import { useRouter } from "next13-progressbar";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5F2C70",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export type Video = {
  _id: string;
  type: string;
  thumbnail: string;
  title: string;
  category: string;
  isSolution: boolean;
  isPaid: boolean;
  url: string;
  createdBy: {
    _id: string;
    name: string;
  };
  Short_description: string;
  Long_description: string;
};

let rows: Video[] = [];

function VideosTable() {
  const [edit, setEdit] = React.useState<Video | null>(null);
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const [encorElm, setEncorElm] = React.useState<null | HTMLButtonElement>(
    null
  );
  const searchParams = useSearchParams();
  const [page, setPage] = React.useState<number>(
    +searchParams.toString().split("=")[1]
  );
  let count = 10;
  const pathName = usePathname();
  const { push } = useRouter();
  const { auth } = React.useContext(AuthContext) as AuthContextType;
  const [sltRow, setSltRow] = React.useState<Video>();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };
  const [alert, setAlert] = React.useState(true);

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["videos", page],
    queryFn: async () => {
      return getVideos(page);
    },
  });

  const {
    isError: deleteError,
    isLoading: deleteLoading,
    mutateAsync: deleteMutation,
    isSuccess: deleteSuccess,
  } = useMutation({
    mutationFn: async (_id: string) => {
      return await deleteVideo(_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos", page] });
    },
  });

  const handleClose = () => {
    setEdit(null);
  };
  if (isError) {
    return (
      <TableContainer
        component={Paper}
        sx={{
          height: "100%",
          // border: "1px solid red",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Table
          sx={{
            background: `url('${imageUrl.src}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "80%",
            border: "1px solid red",
            width: "100%",
            borderRadius: "50%",
          }}
        ></Table>
      </TableContainer>
    );
  }
  if (isLoading) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Thumbnail</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="center">Is Soluton</StyledTableCell>
              <StyledTableCell align="center">Is Paid</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              <StyledTableCell align="center">Video Url</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ color: "#5F2C70" }}
              >
                <Skeleton variant="rectangular" />
                {/* {row?.name} */}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton variant="rectangular" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton variant="rectangular" />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Skeleton variant="circular" width={50} height={50} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Skeleton variant="circular" width={50} height={50} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Skeleton variant="rectangular" />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Skeleton variant="rectangular" />
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  onClick={(event) => {
                    setEncorElm(event.currentTarget);
                    setOpen(true);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
            {/* ))} */}
          </TableBody>
        </Table>
        <Box
          // border={"1px solid red"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          padding={"20px"}
        >
          <Pagination
            count={count}
            size={"large"}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </TableContainer>
    );
  }

  if (isSuccess) {
    rows = data.data.data.videos;
    count = data.data.data.count;
  }

  return (
    <TableContainer component={Paper}>
      {edit && (
        <VideoModal onClose={handleClose} open={!!edit} forEditing={edit} />
      )}
      {deleteError && (
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          onClose={() => {
            setAlert(false);
          }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => {
              setAlert(false);
            }}
            severity="error"
            sx={{ width: "100%", padding: "10px" }}
          >
            Unable to delete User
          </Alert>
        </Snackbar>
      )}
      {deleteSuccess && (
        <Snackbar
          open={alert}
          autoHideDuration={6000}
          onClose={() => {
            setAlert(false);
          }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => {
              setAlert(false);
            }}
            severity="success"
            sx={{ width: "100%", padding: "10px" }}
          >
            Deleted Successfully
          </Alert>
        </Snackbar>
      )}
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Thumbnail</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Is Soluton</StyledTableCell>
            <StyledTableCell align="center">Is Paid</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Video Url</StyledTableCell>
            <StyledTableCell align="right">
              <AddIcon />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row?._id}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ color: "#5F2C70" }}
              >
                <Box
                  // border={"1px solid black"}
                  width={"fit-content"}
                  height={"fit-content"}
                >
                  <Image
                    src={row.thumbnail}
                    alt="this alt"
                    width={100}
                    height={60}
                  />
                </Box>
              </StyledTableCell>
              <StyledTableCell align="left">{row?.title}</StyledTableCell>
              <StyledTableCell align="center">{row?.category}</StyledTableCell>
              <StyledTableCell align="center">
                {row?.isSolution ? (
                  <DoneAllIcon sx={{ color: "green" }} />
                ) : (
                  <CancelIcon sx={{ color: "red" }} />
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row?.isPaid ? (
                  <DoneAllIcon sx={{ color: "green" }} />
                ) : (
                  <CancelIcon sx={{ color: "red" }} />
                )}
              </StyledTableCell>
              <StyledTableCell align="center">{row?.type}</StyledTableCell>
              <StyledTableCell align="center">{row?.url}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  onClick={(event) => {
                    setEncorElm(event.currentTarget);
                    setSltRow(row);
                    setOpen(true);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={encorElm}
                  open={open}
                  onClose={() => setOpen(false)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{ left: "-50px" }}
                >
                  <MenuItem
                    onClick={() => {
                      const row = sltRow;
                      if (row) setEdit(row);
                      setOpen(false);
                    }}
                  >
                    {" "}
                    <EditIcon
                      sx={{ marginRight: "10px", color: "#5F2C70" }}
                    />{" "}
                    Edit
                  </MenuItem>
                  <MenuItem
                    onClick={async () => {
                      const row = sltRow;
                      if (row?._id) await deleteMutation(row._id);
                      setAlert(true);
                      setOpen(false);
                    }}
                  >
                    <DeleteIcon
                      sx={{ marginRight: "10px", color: "#5F2C70" }}
                    />
                    Delete
                  </MenuItem>
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        // border={"1px solid red"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={"20px"}
      >
        <Pagination
          count={Math.ceil(count / 10)}
          size={"large"}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </TableContainer>
  );
}

export default VideosTable;
