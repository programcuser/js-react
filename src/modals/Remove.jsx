import React from 'react'; // , { useEffect }
// import { useImmer } from 'use-immer';
import { useFormik } from 'formik';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import cn from 'classnames';

const Remove = (props) => {
  // const [show, setShow] = useState(props.show);
  // const handleClose = () => setShow(false);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: values => {
      props.onRemove(props.idNote);
      props.onHide();
    },
  });

  return (
    <Modal.Dialog>
      <Modal.Header onHide={props.onHide} closeButton>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input className="btn btn-danger" type="submit" value="remove" />
          </div>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default Remove;
