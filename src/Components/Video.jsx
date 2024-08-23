import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const Video = () => {
  return (
    <div>
      <Container>
        <div className="ratio ratio-16x9">
             <iframe src="https://www.youtube.com/embed/OKVFO9-PaKY?si=pR8jNuL84aXnYcAU" title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
  )
}

export default Video;

