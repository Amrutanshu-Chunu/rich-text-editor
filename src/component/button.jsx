

const Button = (props) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            style={{
                padding: '8px 16px',
                border: 'none',
                background: 'transparent',
                color: props.mode === 'light' ? 'black' : 'white'
            }}
        >
            {props.children}
        </button>
    );
};

export default Button;