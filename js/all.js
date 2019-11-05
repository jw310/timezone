let timezone = document.querySelectorAll('.timezone');
    // console.log(timezone.getAttribute('date-timezone'));

function zone(){
    // Array 用了兩個方法 .from() 指定要用 .foreach() 的陣列,上面的 timezone 是個陣列
    // Array.from(timezone）.forEach(）
    timezone.forEach(element => {  // 引數 element 在這代表 timezone 抓到的 DOM 元素
    const date = new Date();  // 取得目前時間
    let tz = element.getAttribute('date-timezone'); // 操作 <div> element 元素取得屬性值
    let dt = date.toLocaleString('zh-tw',{timeZone: tz, hour12: false});
    console.log(dt);
    
    let year = dt.slice(0,4);    // 字串分割
    console.log(year);
    let mouth = dt.slice(5,7); 
    console.log(mouth);
    let day = dt.slice(8,9); 
    console.log(day);
    let time = dt.slice(10,15); 
    console.log(time);
    // 替換 DOM 的時區,這裡要用上面的引數不然沒有分出時區
    element.querySelector('.date').innerHTML = `${day} ${mouth}.${year}`; 
    element.querySelector('.time').innerHTML = time; 
  });
}

zone();

setInterval(zone, 10000);

// array.from()

// JS 取得當地日期時間方法說明   new Date().toLocaleString('language', {...options});
//                               當地地區               想知道的地區      24小時制
// ex: new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei', hour12: false}});
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString