import { useState } from 'react';

const useHandleMenu = () => {
    const [visible, setVisible] = useState(false)

    const handleVisible = () => setVisible(true)
    const handleClose = () => setVisible(false)
    

  return { visible, handleVisible, handleClose }
}

export default useHandleMenu