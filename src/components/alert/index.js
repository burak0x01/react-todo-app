import './main.scss';

function Alert(props) {

    return(
        <div className={props.alertType}>
            <span>{props.text}</span>
        </div>
    );
}

export default Alert;