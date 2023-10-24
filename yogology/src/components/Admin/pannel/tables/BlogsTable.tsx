import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import Blog from "@/components/Blogs/Blog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import imageUrl from "../../../../assets/images/errors.webp";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBlogs } from "@/Utils/query/getBlogs";
import { deleteBlog } from "@/Utils/mutation/deleteBlog";
import ModalComp from "../Modals/BlogsModal";
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

let rows: Blog[] = [];
const PageSize = 10;
function BlogTable() {
  const [edit, setEdit] = React.useState<Blog | null>(null);
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const [encorElm, setEncorElm] = React.useState<null | HTMLButtonElement>(
    null
  );
  let count = 10;
  const [sltRow, setSltRow] = React.useState<Blog>();
  const searchParams = useSearchParams();
  const [page, setPage] = React.useState<number>(
    +searchParams.toString().split("=")[1]
  );
  const [alert, setAlert] = React.useState(true);
  const { push } = useRouter();
  const pathName = usePathname();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };

  const { isSuccess, isError, isLoading, data } = useQuery({
    queryFn: async () => {
      return getBlogs(page, PageSize);
    },
    queryKey: ["blogs", page],
  });

  const {
    isLoading: deleteLoading,
    isError: deleteError,
    isSuccess: deleteSuccess,
    mutateAsync,
  } = useMutation({
    mutationFn: async (_id: string) => {
      return await deleteBlog(_id);
    },
    // mutationKey: ["deleteBlog", sltRow && sltRow._id],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs", page] });
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
            <TableRow sx={{ width: "100%" }}>
              <StyledTableCell align="left" sx={{ width: "10%" }}>
                Thumbnail
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ width: "20%" }}>
                Title
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ width: "70%" }}>
                Introduction
              </StyledTableCell>
              <StyledTableCell align="right">
                <AddIcon />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ color: "#5F2C70" }}
              >
                <Skeleton variant="rectangular" width={100} height={50} />
                {/* {row?.name} */}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton variant="rectangular" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton variant="rectangular" width={"100%"} height={50} />
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
          </TableBody>
        </Table>
        <Box
          // border={"1px solid red"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          padding={"20px"}
        >
          <Skeleton width={40} variant="circular" height={40} />
          <Skeleton width={40} variant="circular" height={40} />
          <Skeleton width={40} variant="circular" height={40} />
        </Box>
      </TableContainer>
    );
  }
  if (isSuccess) {
    rows = data.data.data.blogs;
    count = data.data.data.count;
  }

  return (
    <TableContainer component={Paper}>
      {edit && <ModalComp open={!!edit} onClose={handleClose} forEdit={edit}/>}
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
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ width: "100%" }}>
            <StyledTableCell align="left" sx={{ width: "10%" }}>
              Thumbnail
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ width: "20%" }}>
              Title
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ width: "70%" }}>
              Introduction
            </StyledTableCell>
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
                    src={row.imageUrl}
                    alt="this alt"
                    width={100}
                    height={60}
                  />
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography fontWeight={"bold"}>{row?.heading}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography
                  textAlign={"left"}
                  fontStyle={"italic"}
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  {row?.introduction}
                </Typography>
              </StyledTableCell>
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
                      if (row?._id) await mutateAsync(row._id);
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
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={"20px"}
      >
        <Pagination
          count={count / 10}
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

export default BlogTable;
