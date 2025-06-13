import TextArea from "../component/TextArea";
import Alert from "../component/alert";

import { useState } from 'react';

function Dashboard({ mode, toggleMode }) {
    const [showAlert, setShowAlert] = useState(true);
    const handleCloseAlert = () => setShowAlert(false);
    return (
        <div>
            {showAlert ? (
                <Alert message="This is alert Message" mode={mode} onClose={handleCloseAlert} />
            ) : null}
            <TextArea mode={mode} />
        </div>
    );
}

export default Dashboard;