import './Alert.scss';

function Alert(props) {
  return (
    <div id="#alert" className='alert'>
      {props.children}
    </div>
  );
}

export default Alert;
