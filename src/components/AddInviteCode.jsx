/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { createInvite } from "../service/Service";
import { toast } from "react-toastify";

const AddInviteCode = (props) => {
  const { open, onClose, familyId, familyName } = props;
  const [inviteCode, setInviteCode] = useState();
  // console.log(familyId);

  const addInvite = async () => {
    let res = await createInvite(familyId);
    if (res && res.data) {
      toast.success("Tạo thành công lời mời");
      setInviteCode(res.data.inviteCode);
      onClose();
    } else {
      toast.error("Lỗi!");
    }
  };
  return (
    <>
      <Dialog open={open} onClose={onClose} sx={{ maxWidth: "xl" }}>
        <DialogTitle className="text-blue-400 text-center font-bold">
          Tạo lời mời
        </DialogTitle>
        <div className="border-[1px] border-gray-300"></div>
        <DialogContent>
          <Box sx={{ gap: "3px" }}>
            <Typography>
              Bạn đang tạo lời mời gia nhập cho gia đình "ABC"
            </Typography>
            <Typography>Mã mời của bạn là: 11244751221</Typography>
          </Box>
        </DialogContent>
        <DialogActions className="flex justify-end">
          <Button onClick={onClose}>Hủy</Button>
          <Button
            onClick={onClose}
            className="bg-orange-300 hover:text-red-500"
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddInviteCode;
