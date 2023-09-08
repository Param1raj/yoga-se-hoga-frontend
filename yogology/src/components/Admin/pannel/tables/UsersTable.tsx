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
} from "@mui/material";
import ThreePIcon from "@mui/icons-material/ThreeP";
import AddIcon from "@mui/icons-material/Add";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "@/Utils/query/getUsers";
import Image from "next/image";
import imageUrl from "../../../../assets/images/errors.webp";
import { deleteUser } from "@/Utils/mutation/deletUser";
// import { useRouter } from "next/router";
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
  name: string,
  email: string,
  phone: string,
  subscription: boolean,
  referralCode: string,
  _id: string,
  subscriptionStart?: string,
  subscriptionEnd?: string
) {
  return {
    name,
    email,
    phone,
    subscription,
    referralCode,
    subscriptionStart,
    subscriptionEnd,
    _id,
  };
}
export type User = {
  _id: string;
  email: string;
  phone: string;
  subscriptionStart: string;
  subscription: boolean;
  subscriptionEnd: string;
  referralCode: string;
  name: string;
};

let rows: User[] = [];

function UsersTable() {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(true);
  const [encorElm, setEncorElm] = React.useState<null | HTMLButtonElement>(
    null
  );
  const searchParams = useSearchParams();
  const [page, setPage] = React.useState<number>(
    +searchParams.toString().split("=")[1]
  );
  const [slcRow, setSlcRow] = React.useState<User>();
  const pathName = usePathname();
  const { push } = useRouter();
  const queryClient = useQueryClient();

  let count = 10;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryFn: async () => {
      return await getUsers(page);
    },
    queryKey: ["users", page],
  });

  const {
    mutate,
    isError: deleteError,
    isLoading: deleteLoading,
    isSuccess: deleteSuccess,
  } = useMutation({
    mutationFn: async (_id: string) => {
      return await deleteUser(_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", page] });
    },
  });

  // if (deleteError) setAlert(true);

  const handleDelete = (_id: string) => {};

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
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Subscribed</StyledTableCell>
              <StyledTableCell align="left">Subscription Date</StyledTableCell>
              <StyledTableCell align="left">
                Subscription End Date
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row?.name}>
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
                <StyledTableCell align="left">
                  <Skeleton variant="circular" width={50} height={50} />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Skeleton variant="rectangular" />
                </StyledTableCell>
                <StyledTableCell align="left">
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

  if (isSuccess) {
    rows = data.data.data.users;
    count = data.data.data.count;
  }

  return (
    <TableContainer component={Paper}>
      {deleteError && (
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          // onClose={() => {
          //   setAlert(false);
          // }}
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
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Subscribed</StyledTableCell>
            <StyledTableCell align="left">Subscription Date</StyledTableCell>
            <StyledTableCell align="left">
              Subscription End Date
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <StyledTableRow key={row?._id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ color: "#5F2C70" }}
                >
                  {row?.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row?.email}</StyledTableCell>
                <StyledTableCell align="left">91+ {row?.phone}</StyledTableCell>
                <StyledTableCell align="left">
                  {row?.subscription ? (
                    <DoneAllIcon sx={{ color: "green" }} />
                  ) : (
                    <CancelIcon sx={{ color: "red" }} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row?.subscriptionStart}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row?.subscriptionEnd}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={(event) => {
                      setOpen(true);
                      setEncorElm(event.currentTarget);
                      setSlcRow(row);
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
                    <MenuItem onClick={() => {}}>
                      <ThreePIcon
                        sx={{ marginRight: "10px", color: "#5F2C70" }}
                      />
                      Profile
                    </MenuItem>
                    <MenuItem onClick={() => {}}>
                      <AddIcon sx={{ marginRight: "10px", color: "#5F2C70" }} />
                      Subscribe
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        let row = slcRow;
                        setAlert(true);
                        if (row) mutate(row._id);
                        setOpen(false);
                        if (deleteSuccess) {
                          console.log("success");
                          // setEncorElm(null);
                        }
                      }}
                    >
                      <DeleteIcon
                        sx={{ marginRight: "10px", color: "#5F2C70" }}
                      />
                      {deleteLoading ? "Deleting..." : "Delete"}
                    </MenuItem>
                    <MenuItem onClick={() => {}}>
                      <BookmarkRemoveIcon
                        sx={{ marginRight: "10px", color: "#5F2C70" }}
                      />
                      Unsubscribe
                    </MenuItem>
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
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

export default UsersTable;
