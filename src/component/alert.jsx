function Alert(props) {
    return (
        <div className="alert alert-warning alert-dismissible fade show alert-primary" role="alert" color={props.mode === 'dark' ? 'white' : 'black'}>
            <strong color={props.mode === 'dark' ? 'white' : 'black'}> {props.message} </strong>
            <button
                color={props.mode === "dark" ? "white" : "black"}
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={props.onClose}
            ></button>
        </div>
    );
}
export default Alert;