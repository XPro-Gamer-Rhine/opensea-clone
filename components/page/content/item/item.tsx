import React, { useState } from 'react';
import Modal from '../../../utils/modal';
import ItemDetails from './itemDetails';

const Item = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ItemDetails setModalOpen={setModalOpen} />
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(!modalOpen)}
        />
      )}
    </>
  );
};

export default Item;
