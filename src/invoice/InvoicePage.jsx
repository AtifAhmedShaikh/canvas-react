import React from "react";
import { generateInvoice } from "./data";
import { useRef } from "react";
import { usePDF } from "react-to-pdf";

const InvoicePage = () => {
  const invoiceData = generateInvoice();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const calculateSubtotal = () => invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0);
  const calculateTotal = () => calculateSubtotal() - invoiceData.discount;

  const handleGeneratePDF = () => {
    toPDF({ filename: "invoice.pdf", method: "open" });
  };

  return (
    <>
      <h1 className="text-center text-green-700 text-3xl my-2">Customer Invoice</h1>
      <div className="max-w-2xl mt-2 mx-auto p-4 bg-white shadow-md rounded" ref={targetRef}>
        {/* Company Info */}
        <div className="mb-3">
          <h1 className="text-2xl font-bold">{invoiceData.company.name}</h1>
          <p>{invoiceData.company.address}</p>
          <p>{invoiceData.company.phone}</p>
          <p>{invoiceData.company.email}</p>
        </div>

        {/* Client Info */}
        <div className="mb-2">
          <h2 className="text-xl font-semibold">Bill To:</h2>
          <p>{invoiceData.client.name}</p>
          <p>{invoiceData.client.address}</p>
        </div>

        {/* Invoice Items */}
        <table className="min-w-full bg-white overflow-y-scroll">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-right">Quantity</th>
              <th className="py-3 px-6 text-right">Price</th>
              <th className="py-3 px-6 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {invoiceData.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{item.description}</td>
                <td className="py-3 px-6 text-right">{item.quantity}</td>
                <td className="py-3 px-6 text-right">${item.price.toFixed(2)}</td>
                <td className="py-3 px-6 text-right">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Calculation */}
        <div className="mt-4 flex justify-between">
          <div className="w-20 h-20">
            <img src="QR-Code-1.png" alt="" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount:</span>
              <span>-${invoiceData.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <button onClick={handleGeneratePDF} className="bg-blue-700 rounded-sm borer px-2 py-1 text-gray-200 m-auto">
          Generate Pdf
        </button>
      </div>
    </>
  );
};

export default InvoicePage;
