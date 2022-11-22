// This module can be used to toggle a modal or menus

import { useState } from 'react';

const useHandleMenu = () => {
  const [visible, setVisible] = useState(false)

  const handleVisible = () => setVisible(true)
  const handleClose = () => setVisible(false)
    

  return { visible, handleVisible, handleClose }
}

export default useHandleMenu