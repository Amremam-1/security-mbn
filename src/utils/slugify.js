export const slugify = (text = "") => {
  return text
    .toString()
    .normalize("NFD") // يشيل التشكيل لو فيه
    .replace(/[\u0300-\u036f]/g, "") // يشيل أي حروف مركبة
    .replace(/[^a-zA-Z0-9\s-]/g, "") // يشيل الرموز والعلامات الغريبة
    .trim() // يشيل المسافات من الأول والآخر
    .replace(/\s+/g, "-") // يبدل المسافات بـ -
    .toLowerCase() // يخلي كله lowercase
}
