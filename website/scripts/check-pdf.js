const fs = require('fs');
const path = require('path');

// Create placeholder PDF if it doesn't exist
const pdfDir = path.join(__dirname, '..', 'books', 'torch-and-horizon', 'pdf');
const pdfPath = path.join(pdfDir, 'torch-and-horizon-v1.pdf');

if (!fs.existsSync(pdfPath)) {
  console.log('Note: PDF file not found at:', pdfPath);
  console.log('Please place the PDF file at: books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf');
  console.log('The PDF download link will be active once the file is in place.');
}

// Create a placeholder text file with instructions
const placeholderPath = path.join(pdfDir, 'PDF_PLACEHOLDER.txt');
if (!fs.existsSync(placeholderPath)) {
  const instructions = `
PDF Placeholder
================

To complete the website setup, place the PDF file at:

  books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf

The PDF download link on the book landing page will automatically work once the file is in place.

For development, you can:
1. Add the actual PDF file
2. Add a placeholder PDF for testing
3. Comment out the download section in app/books/torch-and-horizon/page.tsx

File size note: For Vercel deployment, ensure the PDF is under 100MB.
For Cloudflare Pages, ensure it's under 25MB.
`;

  fs.writeFileSync(placeholderPath, instructions);
  console.log('Created PDF placeholder instructions at:', placeholderPath);
}
