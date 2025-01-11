// const ran = Math.random();
// console.log("random",ran);
// const multi_ran = ran * 20;
// console.log("random*20",multi_ran);
// const floor_multi_ran = Math.floor(multi_ran);
// console.log("floor",floor_multi_ran);
// console.log(20*0.9999999999999999);

//An array of quotes
const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The only thing necessary for the triumph of evil is for good men to do nothing. — Edmund Burke",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "You must be the change you wish to see in the world. — Mahatma Gandhi",
    "It is never too late to be what you might have been. — George Eliot",
    "Time is what we want most, but what we use worst. — William Penn",
    "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. — Ralph Waldo Emerson"
];


//An array of few more quotes
const upliftingQuotes = [
    "The best way to predict the future is to create it. — Abraham Lincoln",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
    "Your life does not get better by chance, it gets better by change. — Jim Rohn",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
    "Don’t wait for the perfect moment. Take the moment and make it perfect. — Zoey Sayward",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats",
    "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
    "The only way to achieve the impossible is to believe it is possible. — Charles Kingsleigh",
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. — Vivian Greene",
    "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. — Marie Forleo",
    "Act as if what you do makes a difference. It does. — William James",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "It’s never too late to be what you might have been. — George Eliot",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The only thing necessary for the triumph of evil is for good men to do nothing. — Edmund Burke",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "You must be the change you wish to see in the world. — Mahatma Gandhi",
    "It is never too late to be what you might have been. — George Eliot",
    "Time is what we want most, but what we use worst. — William Penn",
    "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. — Ralph Waldo Emerson",
    "Every accomplishment starts with the decision to try. — John F. Kennedy",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful. — Joshua Marine",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Dream it. Wish it. Do it. — Unknown",
    "The harder you work, the luckier you get. — Gary Player",
    "Success doesn’t just find you. You have to go out and get it. — Unknown",
    "Work hard in silence, let your success be your noise. — Frank Ocean",
    "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. — Christian D. Larson",
    "We cannot solve our problems with the same thinking we used when we created them. — Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Be the change that you wish to see in the world. — Mahatma Gandhi",
    "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
    "Opportunities don't happen. You create them. — Chris Grosser",
    "Doubt kills more dreams than failure ever will. — Suzy Kassem",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "You are braver than you believe, stronger than you seem, and smarter than you think. — A.A. Milne",
    "The best revenge is massive success. — Frank Sinatra",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. — Christian D. Larson",
    "The only time you should ever look back is to see how far you've come. — Unknown",
    "Everything is impossible until it's done. — Nelson Mandela",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Do what you can with all you have, wherever you are. — Theodore Roosevelt",
    "If you can dream it, you can do it. — Walt Disney",
    "Don’t wait. The time will never be just right. — Napoleon Hill",
    "The best way to predict the future is to create it. — Abraham Lincoln",
    "It’s never too late to start. — Unknown",
    "The key to success is to start before you are ready. — Marie Forleo",
    "Work hard in silence, let success make the noise. — Frank Ocean",
    "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
    "If you want to achieve greatness stop asking for permission. — Unknown",
    "Life begins at the end of your comfort zone. — Neale Donald Walsch",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Don’t count the days, make the days count. — Muhammad Ali",
    "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
    "Do one thing every day that scares you. — Eleanor Roosevelt",
    "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Your passion is waiting for your courage to catch up. — Isabelle Lafleche",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Be so good they can't ignore you. — Steve Martin",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Great things never come from comfort zones. — Neil Strauss",
    "In order to succeed, we must first believe that we can. — Nikos Kazantzakis",
    "Everything you can imagine is real. — Pablo Picasso",
    "Be the change you wish to see in the world. — Mahatma Gandhi",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "In order to succeed, we must first believe that we can. — Nikos Kazantzakis",
    "Go the extra mile, it’s never crowded. — Wayne Dyer",
    "You are capable of amazing things. — Unknown",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "The journey of a thousand miles begins with one step. — Lao Tzu"
];



  //merging the two above quotes array to find the unique values and avoiding duplicates
  const uniqueQuotes = [...new Set([...quotes,...upliftingQuotes])]
  //console.log(uniqueQuotes)
  

//Gradient colors array
const gradient_Colors = [
    "linear-gradient(to right, #FFB6C1, #FF69B4)",  // Light Pink to Hot Pink
    "linear-gradient(to right, #ADD8E6, #4682B4)",  // Light Blue to Steel Blue
    "linear-gradient(to right, #F0E68C, #9ACD32)",  // Khaki to Yellow Green
    "linear-gradient(to right, #F0F8FF, #ADD8E6)",  // Alice Blue to Light Blue
    "linear-gradient(to right, #E6E6FA, #D8BFD8)",  // Lavender to Thistle
    "linear-gradient(to right, #FFB6C1, #FFCCCB)",  // Light Pink to Misty Rose
    "linear-gradient(to right, #D3D3D3, #A9A9A9)",  // Light Gray to Dark Gray
    "linear-gradient(to right, #F5FFFA, #98FB98)",  // Mint Cream to Pale Green
    "linear-gradient(to right, #F0FFFF, #00CED1)",  // Azure to Dark Turquoise
    "linear-gradient(to right, #FFFAF0, #F4A460)",  // Floral White to Sandy Brown
    "linear-gradient(to right, #D2B48C, #F4A460)",  // Tan to Sandy Brown
    "linear-gradient(to right, #B0E0E6, #4682B4)",  // Powder Blue to Steel Blue
    "linear-gradient(to right, #FFFACD, #F0E68C)",  // Lemon Chiffon to Khaki
    "linear-gradient(to right, #F8F8FF, #E6E6FA)",  // Ghost White to Lavender
    "linear-gradient(to right, #F0F8FF, #B0C4DE)",   // Alice Blue to Light Steel Blue
    "linear-gradient(#FFDEE9, #B5FFFC)",  // Light Pink to Light Cyan
    "linear-gradient(#FFF1D0, #A0C4FF)",  // Cream to Light Blue
    "linear-gradient(#E0E0E0, #D5E8D4)",  // Light Gray to Pale Green
    "linear-gradient(#F8D7DA, #FF9A8B)",  // Light Pink to Coral Red
    "linear-gradient(#F1F2B5, #135058)",  // Soft Yellow to Dark Teal
    "linear-gradient(#FAD0C4, #FFD1FF)",  // Peach to Lavender
    "linear-gradient(#B4E7A1, #A3D9D1)",  // Soft Green to Light Aqua
    "linear-gradient(#F0D3A3, #F8C8DC)",  // Light Gold to Pale Pink
    "linear-gradient(#D4E2D4, #F0E1D2)",  // Light Sage Green to Warm Beige
    "linear-gradient(#D9E6F2, #A4B6D1)",  // Light Blue to Light Periwinkle
    "linear-gradient(#E7B2D8, #B5B4FF)",  // Lavender Pink to Light Purple
    "linear-gradient(#F8E9A1, #F1C0B5)",  // Soft Yellow to Light Coral
    "linear-gradient(#FFD1DC, #D0E8F2)",  // Pale Pink to Soft Blue
    "linear-gradient(#B3E4D5, #FFE2B3)",  // Mint to Peach
    "linear-gradient(#F1C6FF, #F2E7D5)",  // Lavender to Soft Beige
    "linear-gradient(#D3CCE3, #E9B7D2)",  // Light Lilac to Rose Quartz
    "linear-gradient(#FFEFBA, #D4A5A5)",  // Light Yellow to Dusty Rose
    "linear-gradient(#C1D3FF, #D9E4FF)",  // Soft Blue to Baby Blue
    "linear-gradient(#D9F1D9, #FFECF7)",  // Pale Mint to Soft Pink
    "linear-gradient(#F2C6D1, #FFC3A0)"   // Light Pink to Peach
  ];
  

//function to generate the quotes
function gen_quote() {
    const quote = document.getElementById("quote");
    // console.log(quote.innerText);

quote.innerText = uniqueQuotes[Math.floor(Math.random()*uniqueQuotes.length)];
}

//function to set the background colors
function gen_color() {
    // const str = gradient_Colors[19];
    // console.log(str);
    document.body.style.background = gradient_Colors[Math.floor(Math.random()*gradient_Colors.length)];
    //document.body.style.background = "linear-gradient(to right, #037cfd,#e284e2)";
    //bdy.backgroundColor = gradientColors[Math.floor(Math.random()*gradientColors.length)];
}

//function to update the clock/time
function updateTime() {
    const clock = new Date();
    // console.log("clock",clock);
    let hours = clock.getHours();
    // console.log("hours",hours);
    let minutes = clock.getMinutes();
    // console.log("minutes",minutes);
    let seconds = clock.getSeconds();
    // console.log("seconds",seconds);
    // const day = clock.getDay();
    // console.log("day",day);
    // const date = clock.getDate();
    // console.log("date",date);
    // const year = clock.getFullYear();
    // console.log("year",year);
    // const month = clock.getMonth();
    // console.log("month",month);

    let hours_24 = clock.getHours();
    
    //return am:pm on the basis of current time(clock.getHours) which gives a 24 hour time
    let ampm = hours_24 <= 11 ? "AM" : "PM";
    
    hours = hours % 12; //converting to a 12 hour format by doing hours%12

    //appending leading zeros to hours,minutes and seconds if its value is less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    
    const upd_clock = document.getElementById("clock");
    // console.log(upd_clock);
    // const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    const formattedTime = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    upd_clock.innerText = formattedTime;
}

    //function to update the weekday,month,date/day,year
    function updateDate() {
        const date = new Date();  // Get current date
        const options = {
            weekday: 'long',  // Day of the week (e.g., "Thursday")
            month: 'long',    // Full month name (e.g., "December")
            day: '2-digit',   // Day of the month (e.g., "19")
            year: 'numeric'   // Year (e.g., "2024")
        };
    
        const formattedDate = date.toLocaleDateString('en-US', options);
        document.getElementById("day_date").innerText = formattedDate;
    }
    
    setInterval(updateTime,1000); //calling updateTime() every second
    setInterval(updateDate,1000); //calling updateDate() every second
    setInterval(gen_color,10000); //generating a random background color every 10 seconds by calling gen_color()
    setInterval(gen_quote,10000); //generating a random quote every 10 seconds by calling gen_quote()
    

    updateTime(); // calling updateTime() so the time is being set accurately without any lags when opening a fresh tab
    updateDate(); // calling updateDate() so the date is being set accurately without any lags when opening a fresh tab
    gen_color();  // calling gen_color() for eliminating any delays while loading a fresh tab
    gen_quote();  // calling gen_quote() for eliminating any delays while loading a frest tab






  