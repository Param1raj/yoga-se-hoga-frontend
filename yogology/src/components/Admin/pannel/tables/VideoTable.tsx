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
  Box,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Typography,
} from "@mui/material";
// import ThreePIcon from "@mui/icons-material/ThreeP";
import AddIcon from "@mui/icons-material/Add";
// import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { All_Video } from "../../../../../apis.";
import { AuthContext } from "@/app/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getVideos } from "@/Utils/query/getVideos";
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
  Short_Description: string;
  Long_Description: string;
};
// function createData({
//   thumbnail,
//   title,
//   Long_Description,
//   Short_Description,
//   category,
//   isSolution,
//   isPaid,
//   url,
//   createdBy,
// }: Video) {
//   return {
//     thumbnail,
//     title,
//     category,
//     isSolution,
//     isPaid,
//     url,
//     createdBy,
//     Short_Description,
//     Long_Description,
//   };
// }

let rows: Video[] = [];

function VideosTable() {
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
  const { auth } = React.useContext(AuthContext);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["videos", page],
    queryFn: async () => {
      return getVideos(page);
    },
  });

  if (isLoading) {
    return <Typography>Loading..... </Typography>;
  }

  if (isError) {
    return <Typography>Error------ </Typography>;
  }

  if (data) {
    rows = data.data.videos;
    count = data.data.count;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Thumbnail</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Is Soluton</StyledTableCell>
            <StyledTableCell align="center">Is Paid</StyledTableCell>
            <StyledTableCell align="center">Video Url</StyledTableCell>
            <StyledTableCell align="right">
              <AddIcon />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row?.title}>
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
              <StyledTableCell align="center">{row?.url}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  onClick={(event) => {
                    setEncorElm(event.currentTarget);
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
                    onClick={() => {
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

export default VideosTable;
