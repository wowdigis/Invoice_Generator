import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { BiPaperPlane, BiCloudDownload, BiFontSize } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useDispatch } from "react-redux";
import { addAsync, modifyAsync, copyAsync } from "../../features/invoices/invoiceSlice";
import { useNavigate } from 'react-router-dom';
import wowheadImage from '../../assets/wowhead.png';
import wowbottomImage from '../../assets/wowbottom.png';
import "../../App.css";
const GenerateInvoice = () => {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792],
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice-001.pdf");
  });
};

const InvoiceModal = ({
  type,
  showModal,
  closeModal,
  info,
  currency,
  total,
  items,
  subTotal,
  taxAmmount,
  discountAmmount
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addInvoice = (data) => {
    dispatch(addAsync({ data, navigate }));
  };
  const modifyInvoice = (data) => {
    console.log("object")
    dispatch(modifyAsync({ data, navigate }));
  }
  const copyInvoice = (data) => {
    dispatch(copyAsync({ data, navigate }));
  }
  return (
    <div>
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <div id="invoiceCapture">
          <img src={wowheadImage} alt="headingImage" className="w-100 h-auto" />
          {
            info.billFromGSTNumber && (
              <h6 className="px-4 " style={{marginLeft:"35px"}}>
                <span className="px-4"><span className="fontBold">GSTIN :</span> {info.billFromGSTNumber}</span>
              </h6>
            )
          }
          <div style={{padding:"10px 80px"}} className=" compact-line-height d-flex flex-row justify-content-between align-items-start w-100 ">
            <div className="w-50 ">
              <h6 className="invoice-firasanfont pt-4 fs-5">Billed to:</h6>
              <div className="pt-2 fontBold">{info.billToName || ""}</div>
              <div className="poppins-regular"><span className=" fontBold">Mobile No: </span> {info.billToMobile || ""}</div>
              <div className="poppins-regular"><span className="fontBold">Email: </span> {info.billToEmail  || ""}</div>
              <div className="poppins-regular"><span className="fontBold">Address: </span> {info.billToAdress || ""}</div>
              {
                info.BillToGstNumber && (
                  <div className="poppins-regular"><span className="fontBold">GSTIN : </span> {info.BillToGstNumber || ""}</div>
                )
              }
            </div>
            <div className="text-end w-50 invoice-firasanfont">
              <div className="mt-1 fs-1">Invoice</div>
              <div className="fs-5 " style={{color:"black"}}>Invoice # {info.invoiceNumber || ""}</div>
              <div className="fs-5 "style={{color:"black"}}>{info.dateOfIssue || ""}</div>
            </div>
          </div>
          <div style={{padding:"0px 75px"}}>
            <Table className="mb-4 mt-4 text-center invoice-table ">
              <tbody>
                <tr className="table-row w-100">
                  <td className="table-header" style={{ width: "35%" }}>ITEM</td>
                  <td className="table-header" style={{ width: "12%" }}>T.QTY</td>
                  <td className="table-header" style={{ width: "18%" }}>UNIT PRICE</td>
                  <td className="table-header" style={{ width: "18%" }}>TOTAL</td>
                </tr>
                {items.map((item, i) => (
                  <tr key={i} className="table-row">
                    <td className="table-cell text-start" style={{padding:"10px 20px"}}>{item.name} {item.description}</td>
                    <td className="table-cell" style={{padding:"10px 20px"}}>{item.quantity}</td>
                    <td className="table-cell" style={{padding:"10px 20px"}}>{currency} {item.price}</td>
                    <td className="table-cell" style={{padding:"10px 20px"}}>{currency} {item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Table className="mb-4 mt-4 text-center invoice-table ">
              <tbody>
                <tr className="table-row w-100">
                  <td className="table-cell" style={{ width: "35%" }}>&nbsp;</td>
                  <td className="table-cell" style={{ width: "12%" }}>&nbsp;</td>
                  <td className="table-cell" style={{ width: "18%" }}>SUBTOTAL <br></br>GST(18%)</td>
                  <td className="table-cell" style={{ width: "18%" }}>{currency} {subTotal} <br></br>{currency} {taxAmmount}</td>
                </tr>
                {/* {taxAmmount !== 0.0 && (
                  <tr className="table-row w-100">
                    <td className="table-cell" style={{ width: "35%" }}>&nbsp;</td>
                    <td className="table-cell" style={{ width: "12%" }}>&nbsp;</td>
                    <td className="table-cell" style={{ width: "18%" }}>TAX </td>
                    <td className="table-cell" style={{ width: "18%" }}>{currency} {taxAmmount}</td>
                  </tr>
                )} */}
                {discountAmmount !== 0.0 && (
                  <tr className="table-row w-100">
                    <td className="table-cell" style={{ width: "35%" }}>&nbsp;</td>
                    <td className="table-cell" style={{ width: "12%" }}>&nbsp;</td>
                    <td className="table-cell" style={{ width: "18%" }}>DISCOUNT</td>
                    <td className="table-cell" style={{ width: "18%" }}>{currency} {discountAmmount}</td>
                  </tr>
                )}
                <tr className="table-row w-100">
                  <td className="table-cell" style={{ width: "35%" }}>&nbsp;</td>
                  <td className="table-cell" style={{ width: "12%" }}>&nbsp;</td>
                  <td className="table-cell" style={{ width: "18%" }}>TOTAL</td>
                  <td className="table-cell" style={{ width: "18%", fontWeight:"900" }}>{currency} {total}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex flex-column justify-content-between align-items-start w-100 pb-0 px-2">
              <div className="w-100 ">
                <h5 className="invoice-firasanfont pb-2">BANK TRANSFER DETAILS:</h5>
                <div className="poppins-regular"><span className="fontBold">BANK NAME: </span> {info.billFromBankName || ""}</div>
                <div className="poppins-regular">{info.billTFromName || ""}</div>
                <div className="poppins-regular"><span className="fontBold">A/C- </span> {info.billFromAccountNo || ""}</div>
                <div className="poppins-regular"><span className="fontBold">IFSC CODE -  </span> {info.billFromIFSC || ""}</div>
                <div className="poppins-regular"><span className="fontBold">BRANCH NAME -  </span> {info.billFromBranch || ""}</div>
              </div>
              {/* <div className="w-100 text-end pb-2 px-4">
                <h6>For : WOWSTAR SERVICES INDIA PVT LTD</h6>
              </div> */}
              <div className="d-flex flex-row justify-content-between align-items-start w-100 ">
                <div className="w-50 align-bottom" style={{paddingTop:"100px"}}>
                  <h2 className="invoice-firasanfont">Thank you!</h2>
                </div>
                <div className="w-50 text-end">
                  {info.signImage && (
                    <div>
                      <img src={info.signImage} alt="Preview" style={{ width: '150px', height: '150px',margin:'auto' }} />
                    </div>
                  )}
                  <h6 className="fontBold pt-2">Authorized Signatory</h6>
                </div>
              </div>
            </div>
            {/* {info.notes && (
              <div className= pt-2 px-4 rounded">{info.notes}</div>
            )} */}
          </div>
          <img src={wowbottomImage} alt="bottomImage" className="w-100 h-auto" />
        </div>
        <div className="pb-4 px-4 pt-4">
          <Row>
            <Col md={6}>
              {type === 3 ? (
                <Button
                  variant="primary"
                  className="d-block w-100"
                  onClick={() =>
                    copyInvoice({
                      info,
                      currency,
                      total,
                      items,
                      subTotal,
                      taxAmmount,
                      discountAmmount,
                    })
                  }
                >
                  <BiPaperPlane
                    style={{ width: "15px", height: "15px", marginTop: "-3px" }}
                    className="me-2"
                  />
                  Copy Invoice
                </Button>
              ) : type === 1 ? (<Button
                variant="primary"
                className="d-block w-100"
                onClick={() =>
                  modifyInvoice({
                    info,
                    currency,
                    total,
                    items,
                    subTotal,
                    taxAmmount,
                    discountAmmount,
                  })
                }
              >
                <BiPaperPlane
                  style={{ width: "15px", height: "15px", marginTop: "-3px" }}
                  className="me-2"
                />
                Modify Invoice
              </Button>) : (
                <Button
                  variant="primary"
                  className="d-block w-100"
                  onClick={() =>
                    addInvoice({
                      info,
                      currency,
                      total,
                      items,
                      subTotal,
                      taxAmmount,
                      discountAmmount,
                    })
                  }
                >
                  <BiPaperPlane
                    style={{ width: "15px", height: "15px", marginTop: "-3px" }}
                    className="me-2"
                  />
                  Add Invoice
                </Button>
              )}
            </Col>

            <Col md={6}>
              <Button
                variant="outline-primary"
                className="d-block w-100 mt-3 mt-md-0"
                onClick={GenerateInvoice}
              >
                <BiCloudDownload
                  style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                  className="me-2"
                />
                Download Copy
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
      <hr className="mt-4 mb-3" />
    </div>
  );
};

export default InvoiceModal;
