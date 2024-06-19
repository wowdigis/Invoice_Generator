import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAsync,
  selectInvoice,
  selectStatus,
} from "../features/invoices/invoiceSlice";
import { InvoiceView } from "../components/index";
import { fetchAsync } from "../features/invoices/invoiceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();

  const navigate = useNavigate();

  const createInvoice = () => {
    navigate("/create-invoice");
  };

  const actionInvoice = (id, action) => {
    switch (action) {
      case "Edit":
        navigate(`/edit-invoice/${id}`);
        break;
      case "Delete":
        dispatch(deleteAsync(id));
        break;
      case "View":
        setId(id);
        setIsOpen(true);
        break;
      default:
        break;
    }
  };
  const closeView = () => setIsOpen(false);
  const invoices = useSelector(selectInvoice);
  const status = useSelector(selectStatus);
  useEffect(() => {
    dispatch(fetchAsync());
  },[]);

  return (
    <div className="m-5">
      <Button variant="primary" onClick={createInvoice}>
        Create Invoice
      </Button>
      {status !== "idle" && (
        <div className="mt-3 p-2 rounded-md bg-yellow-200">
          Status: {status}
        </div>
      )}

      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Invoice Id</th>
            <th>Bill To (Name)</th>
            <th>Bill From (Name)</th>
            <th>Date of Issue</th>
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.map((invoice, index) => (
              <tr key={index} >
                <td className="text-center pt-3">{index + 1}</td>
                <td className="text-center pt-3">{invoice.info.id}</td>
                <td className="text-center pt-3">{invoice.info.billToName}</td>
                <td className="text-center pt-3">{invoice.info.billFromBankName}</td>
                <td className="text-center pt-3">{invoice.info.dateOfIssue}</td>
                <td className="text-center">
                <Button
                  variant="outline-success"
                  className="m-1"
                  onClick={() => actionInvoice(invoice.info.id, "View")}
                >
                  View
                </Button>
                <Button
                  variant="outline-info"
                  className="m-1"
                  onClick={() => actionInvoice(invoice.info.id, "Edit")}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  className="m-1"
                  onClick={() => actionInvoice(invoice.info.id, "Delete")}
                >
                  Delete
                </Button>
                </td>
              </tr>
              
            ))}
        </tbody>
      </Table>
      <InvoiceView id={id} isOpen={isOpen} closeView={closeView} />
    </div>
  );
};

export default Home;
