const invoiceData = {
  company: {
    name: "Technics Lab",
    address: "Johar town Lahore, Panjab, Pakistan",
    phone: "0315-8810219",
    email: "info@company.com",
  },
  client: {
    name: "Atif Ahmed",
    address: "Minara road sukkur, sindh, Pakistan",
  },
  items: [
    { description: "Product 1", quantity: 2, price: 50 },
    { description: "Product 2", quantity: 1, price: 100 },
    { description: "Product 3", quantity: 3, price: 25 },
  ],
  discount: 20, // 20% discount
};

export const generateInvoice = () => {
  return invoiceData;
};
