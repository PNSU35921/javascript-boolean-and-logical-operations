let isOver18 = false; //อายุมากกว่า 18 ปีขึ้นไป
let hasCriminalBlacklist = false; //เคยมีประวัติอาชญากรรม
let isAllow = isOver18 && !hasCriminalBlacklist; //เงื่อนไข

console.log(isAllow);
