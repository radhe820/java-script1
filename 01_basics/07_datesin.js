// Creating a new Date object representing the current date and time
let myDate = new Date();
console.log(myDate);  // Outputs full Date object (current date and time)

// Various ways to format the date to string

console.log(myDate.toString());          // Human-readable full date and time string
console.log(myDate.toDateString());      // Human-readable date only (no time)
console.log(myDate.toISOString());       // ISO 8601 format (good for storage/transfer)
console.log(myDate.toJSON());             // Similar to ISO string, used in JSON serialization
console.log(myDate.toLocaleDateString()); // Date formatted based on local culture
console.log(myDate.toLocaleTimeString()); // Time formatted based on local culture

console.log(typeof myDate);  // 'object' - Date is an object type


// Creating Date objects for specific dates and times

// Date(year, monthIndex, day)
// Note: monthIndex is 0-based (January is 0)
let myCreatedDate = new Date(2023, 0, 23);  
console.log(myCreatedDate.toDateString());  // Prints date in human-readable format

// Date with time (hour, minute)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());  // Date and time formatted locally

// Creating date from string in ISO format (YYYY-MM-DD)
let myCreatedDate3 = new Date("2025-05-30");
console.log(myCreatedDate3.toLocaleDateString());

// Creating date from string in MM-DD-YYYY format (may be browser-dependent)
let myCreatedDate4 = new Date("05-30-2025");
console.log(myCreatedDate4.toLocaleString());


// Working with timestamps

// Current timestamp in milliseconds since Unix Epoch (Jan 1, 1970 UTC)
let myTimeStamp = Date.now();
console.log(myTimeStamp);  

// Timestamp of a specific date (milliseconds since Unix Epoch)
console.log(myCreatedDate.getTime());

// Current timestamp (milliseconds)
console.log(Date.now());    

// Convert milliseconds to seconds (divide by 1000)
console.log(Date.now() / 1000);

// Rounded down current timestamp in seconds (integer)
console.log(Math.floor(Date.now() / 1000));


// Getting individual date components from current date

let newDate = new Date();
console.log(newDate);            // Current date and time
console.log(newDate.getDate());  // Day of the month (1-31)
console.log(newDate.getDay());   // Day of the week (0-6, 0 = Sunday)
console.log(newDate.getFullYear()); // 4-digit year
console.log(newDate.getHours()); // Hour of the day (0-23)
console.log(newDate.getMonth() + 1); // Month (0-11), so +1 to get 1-12
console.log(newDate.getTime());  // Timestamp in milliseconds


// Formatting date with options using toLocaleString
// Get full weekday name (e.g., "Monday")
newDate.toLocaleString('default', {
    weekday: "long"
});
