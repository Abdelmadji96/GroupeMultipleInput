import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai"
import { MdOutlineAddCircleOutline } from "react-icons/md"

import { Collapse, Button, InputGroupText, Input, Label } from 'reactstrap';

import './styles.css';

const MultiInput = ({
  groupeTitle,
  titule,
  setTitule,
  price,
  setPrice,
  description,
  setDescription,
  image,
  setImage,
  payload,
  addMethod,
  removeMethod,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <p>{groupeTitle}</p>
      <Button color="success" onClick={toggle} style={{ marginBottom: '1rem' }}>
        <MdOutlineAddCircleOutline size={24} />
      </Button>
      {payload.length > 0 && payload.map((item, index) => (
        <div key={index} className="elementContainer">
          <p className="elementText">{item.titule}</p>
          <Button color="danger" className="btn" onClick={() => removeMethod(item.titule)}> <AiOutlineDelete size={20} /></Button>
        </div>
      ))}
      <Collapse isOpen={isOpen}>
        <InputGroup>
          <InputGroupText>
            TITULÉ
          </InputGroupText>
          <Input placeholder="TITULÉ" value={titule} onChange={(e) => setTitule(e.target.value)} />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupText>
            PRIX
          </InputGroupText>
          <Input placeholder="PRIX" value={price} onChange={(e) => setPrice(e.target.value)} />
          <InputGroupText>
            DA
          </InputGroupText>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupText>
            <Label className="form-label">DESCRIPTION</Label>
          </InputGroupText>
          <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            type="file"
            label={image || 'choose an image filezzz'}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </InputGroup>
        <br />
        <Button
          color="success"
          outline
          className="rounded-pill"
          onClick={addMethod}
        >
          Ajouter
        </Button>
      </Collapse>
    </div>
  )
};

export default MultiInput;
