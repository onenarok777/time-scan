import * as XLSX from "xlsx";
import dayjs from "dayjs";

interface TypeData {
  id: number;
  time_scan: Date;
}

export async function ReadFileTimeLogs(
  file: File | Buffer
): Promise<TypeData[]> {
  try {
    let workbook: XLSX.WorkBook;

    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      workbook = XLSX.read(arrayBuffer, { type: "array" });
    } else {
      workbook = XLSX.read(file, { type: "buffer" });
    }

    const targetSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[targetSheetName];

    if (!worksheet) {
      throw new Error(`ไม่พบ sheet ชื่อ "${targetSheetName}"`);
    }

    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
      blankrows: false,
      raw: false,
      dateNF: "yyyy-mm-dd",
    });

    let data: TypeData[] = [];

    for (const item of jsonData) {
      const row = item as any[];
      const id: number = Number(row[1]);
      const time_scan: Date = dayjs(row[5]).toDate();

      if (id === 0 || isNaN(id)) continue;

      const obj: TypeData = {
        id,
        time_scan,
      };

      data.push(obj);
    }

    return data;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการอ่านไฟล์ XLSX:", error);
    throw new Error(
      `ไม่สามารถอ่านไฟล์ XLSX ได้: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
