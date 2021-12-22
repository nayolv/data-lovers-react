import { useState } from 'react'

export const useShow = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      const [click, setClick] = useState(false);
      const changeClick = () => setClick(!click);
    return {
        open,
        handleOpen,
        handleClose,
        changeClick,
        click,
    }
}
