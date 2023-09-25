import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function VideoModal({ title, videoId, onClose}) {

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
        {title}
    </DialogTitle>
    <DialogContent>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    </DialogContent>
    <DialogActions>
        <Button onClick={onClose}>Close</Button>
    </DialogActions>
    </Dialog>
    
  );
}