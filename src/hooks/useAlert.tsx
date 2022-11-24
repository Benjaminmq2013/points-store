
import { useState } from 'react';

interface params{
    warning: boolean, 
    success: boolean, 
    error: boolean
}

const useAlert = () => {
    const INITIAL_STATE:params = { error: false, success: false, warning: false };
    const [ alertVisible, setAlertVisible ] = useState<params>(INITIAL_STATE);

    const handleHideWarning = () => setAlertVisible({...alertVisible, warning: false })
    const handleHideSucess = () => setAlertVisible({...alertVisible, success: false })
    const handleHideError = () => setAlertVisible({...alertVisible, error: false })

    const handleShowWarning = () => setAlertVisible({...alertVisible, warning: true })
    const handleShowSucess = () => setAlertVisible({...alertVisible, success: true })
    const handleShowError = () => setAlertVisible({...alertVisible, error: true })


  return { handleHideWarning, handleHideSucess, handleHideError, handleShowWarning, handleShowSucess, handleShowError, alertVisible }
}

export default useAlert
