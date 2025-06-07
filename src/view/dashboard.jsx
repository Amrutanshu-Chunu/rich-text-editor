import NavBar from "../component/navBar";
import TextArea from "../component/TextArea";

import { useState } from 'react';

function Dashboard() {
    const [mode, setMode] = useState('light'); // Default mode is light

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        } else {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
        }
    }
    return (
        <div >
            <NavBar mode={mode} toggleMode={toggleMode} />
            <TextArea mode={mode} />
        </div>
    );
}

export default Dashboard;