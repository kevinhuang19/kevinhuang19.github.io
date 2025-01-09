import React, { useState, useEffect}from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../assets/resume_Kevin_Huang.pdf';
import { Container, Row} from "react-bootstrap";
import '../styles/Resume.css';
import Button from "react-bootstrap/Button";
import DownloadIcon from "@material-ui/icons/CloudDownloadOutlined";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <Container fluid className='resume-section'>
      <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "200px" }}
              className="download-button"
            >
              <DownloadIcon />
              &nbsp;Download Resume
            </Button>
          </Row>
          <Row className='resume'>
            <Document file = {pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7:0.6 }/>
            </Document>
          </Row>
      </Container>
    </div>
  )
}

export default Resume;
