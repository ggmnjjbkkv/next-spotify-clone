"use client";

import React from 'react'
import Modal from './Modal';
import useUploadModal from '@/hooks/useUploadModal';

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      uploadModal.onClose();
    }
  }

  return (
    <Modal
    title='Upload modal title'
    description='Upload modal description'
    isOpen={uploadModal.isOpen}
    onChange={onChange}
    >
      Upload Content
    </Modal>
  )
}

export default UploadModal;
