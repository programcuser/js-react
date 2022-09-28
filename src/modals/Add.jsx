import React, { useRef, useEffect } from 'react'; // , { , useState }
// import { useImmer } from 'use-immer';
import { useFormik } from 'formik';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import cn from 'classnames';

const Add = (props) => {
  // const [show, setShow] = useState(props.show);
  // const handleClose = () => setShow(false);
  const inputEl = useRef(null);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: values => {
      props.onAdd(values.body);
      props.onHide();
    },
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Modal.Dialog>
      <Modal.Header onHide={props.onHide} closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input className="form-control" data-testid="input-body" name="body" required ref={inputEl} onChange={formik.handleChange} value={formik.values.body}/>
          </div>
          <input className="btn btn-primary" type="submit" value="submit" />
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default Add;
