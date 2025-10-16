export function formatDate(dateString: Date | null | string) {
    if (dateString == null || dateString == undefined) return ""
    const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const months = [
        "Janurari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
        "Agustus", "September", "Oktober", "November", "Desember"
    ];
    if (dateString == null) return "";
    const date = new Date(dateString);
    const dayName = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
}

export function formatDateTimeLocal(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export function validateImageExtension(imageUrl: string) {
    if (!imageUrl) {
        console.log("No image URL provided");
        return false;
    }
    const extensionPart = imageUrl.split('?')[0];
    const extension = extensionPart.split('.').pop()?.toLowerCase();
    if (!extension) {
        return false;
    }
    const validExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    if (validExtensions.includes(extension)) {
        return true;
    } else {
        return false
    }
}
