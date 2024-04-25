import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { DataType } from "../redux/types";
import { useAppDispatch } from "../redux/store";
import { editUser } from "../redux/action-creators/data";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
  m: 0,
};
type FormValues = {
  name: string;
  username: string;
  phone: string;
  address: string;
  email: string;
};
export default function Edit({
  user,
  open,
  onClose,
}: {
  user: DataType;
  open: boolean;
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const form = useForm<FormValues>({
    defaultValues: {
      name: user.name,
      username: user.username,
      phone: user.phone,
      address: user.address.city,
      email: user.email,
    },
    mode: "onChange",
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    const { address, ...rest } = data;
    dispatch(editUser(user.id, { ...rest, address: { city: address } }));
    onClose()
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style} justifyContent={"center"}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h5">Edit User Information</Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{ p: "10px" }} key="name">
          <TextField
            fullWidth
            label="name"
            variant="outlined"
            color="secondary"
            {...register("name", {
              required: `name is required`,
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: "10px" }} key="username">
          <TextField
            fullWidth
            label="username"
            variant="outlined"
            color="secondary"
            {...register("username", {
              required: `username is required`,
            })}
            onBlur={(e) => {
              
            }}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: "10px" }} key="phone">
          <TextField
            fullWidth
            label="phone"
            variant="outlined"
            color="secondary"
            {...register("phone", {
              required: `phone is required`,
              minLength: 4,
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: "10px" }} key="email">
          <TextField
            fullWidth
            label="email"
            variant="outlined"
            color="secondary"
            {...register("email", {
              required: `email is required`,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12} sx={{ p: "10px" }} key="address">
          <TextField
            fullWidth
            label="address"
            variant="outlined"
            color="secondary"
            {...register("address", {
              required: `address is required`,
            })}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        </Grid>

        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          sx={{ backgroundColor: "rgb(145, 85, 253)" }}
        >
          Submit
        </Button>
      </Grid>
    </Modal>
  );
}
