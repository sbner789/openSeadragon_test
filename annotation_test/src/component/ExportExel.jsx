import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportExel = () => {
  const testSearchArray = [
    {
      id: 1,
      medical_term: "stomach",
      snomed_code: 69695003,
      total_term: "Stomach structure (body structure)",
      category: "organ",
    },
    {
      id: 2,
      medical_term: "needle biopsy",
      snomed_code: 129249002,
      total_term: "needle biopsy (procedure)",
      category: "procedure",
    },
    {
      id: 3,
      snomed_code: "tubular adenoma, low grade",
      serial_number: 1156654007,
      total_term: "benign tubular adenoma (morphologic abnormality)",
      category: "diagnosis",
    },
    {
      id: 4,
      snomed_code: "lungs",
      serial_number: 12345678,
      total_term: "Lungs structure (body structure)",
      category: "organ",
    },
  ];

  const handleExport = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(testSearchArray);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const exelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([exelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "exported_data.xlsx");
  };

  return (
    <div>
      <button onClick={handleExport}>Export to Excel</button>
    </div>
  );
};
export default ExportExel;
