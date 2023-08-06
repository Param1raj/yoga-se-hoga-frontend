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
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import ThreePIcon from "@mui/icons-material/ThreeP";
import AddIcon from "@mui/icons-material/Add";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
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

function createData(
  thumbnail: string,
  title: string,
  category: string,
  problemOriented: boolean,
  instructor: string,
  url: string,
  subscriptionDate?: string
) {
  return {
    thumbnail,
    title,
    category,
    problemOriented,
    instructor,
    url,
    subscriptionDate,
  };
}

const rows = [
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    true,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    true,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    false,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    false,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    false,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    true,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    true,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
  createData(
    "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=1380&t=st=1691182036~exp=1691182636~hmac=8d164eb51915cea89121fc0aefb7bc42fa98833d61b0b49888f939e40bdfc65b",
    "Youtube",
    "Beginner",
    true,
    "Manish Kumar",
    "https://www.youtube.com/embed/rJWdfDPZ9Ck",
    `04 August 2023`
  ),
];

function VideosTable() {
  const [open, setOpen] = React.useState(false);
  const [encorElm, setEncorElm] = React.useState<null | HTMLButtonElement>(
    null
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Thumbnail</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Problem Oriented</StyledTableCell>
            <StyledTableCell align="center">Video Url</StyledTableCell>
            <StyledTableCell align="center">Instructor</StyledTableCell>
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
                {row?.problemOriented ? (
                  <DoneAllIcon sx={{ color: "green" }} />
                ) : (
                  <CancelIcon sx={{ color: "red" }} />
                )}
              </StyledTableCell>
              <StyledTableCell align="center">{row?.url}</StyledTableCell>
              <StyledTableCell align="center">
                {row?.instructor}
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
                <Menu
                  id="basic-menu"
                  anchorEl={encorElm}
                  open={open}
                  onClose={() => setOpen(false)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{ right: "100px" }}
                >
                  <MenuItem
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {" "}
                    <ThreePIcon
                      sx={{ marginRight: "10px", color: "#5F2C70" }}
                    />{" "}
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <AddIcon sx={{ marginRight: "10px", color: "#5F2C70" }} />
                    Subscribe
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
                  <MenuItem
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <BookmarkRemoveIcon
                      sx={{ marginRight: "10px", color: "#5F2C70" }}
                    />
                    Unsubscribe
                  </MenuItem>
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VideosTable;
