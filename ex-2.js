// Exercise #2: Promotion Conditions

let lastMonthPaidMoreThan4000 = true; //ถ้าผู้ซื้อสินค้ามียอดซื้อทั้งหมดในเดือนที่แล้วมากกว่า 4000 บาท
let isWeekday = true;                 //ถ้าวันที่ซื้อสินค้าเป็นวันจันทร์-วันศุกร์
let hasBoughtProductFromITCategory = false; //ถ้าผู้ซื้อสินค้าเคยซื้อสินค้าในหมวดหมู่ IT
let hasAttendedDiscountEvent = true; //ถ้าผู้ซื้อสินค้าเคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อนหน้านี้
let isPlatinum = false;               //ถ้าผู้ซื้อสินค้าเป็นสมาชิกในระดับ Platinum

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && (!hasBoughtProductFromITCategory) && (!hasAttendedDiscountEvent)) || isPlatinum; //เงื่อนไข
console.log(hasPromotion);
