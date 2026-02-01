import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Hàm tính mệnh từ năm sinh
const calculateElement = (year: number) => {
  if (!year || year < 1900 || year > 2100) return null;
  // Can: 4,5=1(Kim); 6,7=2(Thủy); 8,9=3(Hỏa); 0,1=4(Thổ); 2,3=5(Mộc) -> Công thức rút gọn
  const canValue = [4, 5, 1, 1, 2, 2, 3, 3, 4, 4][year % 10];
  const chiValue = [0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 2, 0][year % 12];
  let sum = canValue + chiValue;
  if (sum > 5) sum -= 5;
  const elements = { 1: 'kim', 2: 'thuy', 3: 'hoa', 4: 'tho', 5: 'moc' };
  return elements[sum as keyof typeof elements] || 'kim';
};

// Hàm lấy tên mệnh tiếng Việt
const getElementLabel = (slug: string) => {
  const map: Record<string, string> = { kim: 'Kim', moc: 'Mộc', thuy: 'Thủy', hoa: 'Hỏa', tho: 'Thổ' };
  return map[slug] || '';
};