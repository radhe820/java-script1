// Introduction to JSON and API data formats

// API response often comes in JSON format — JavaScript Object Notation

// JSON object form example:
// Note: In JSON, key-value pairs use colon (:) not equals (=)
// Also keys and string values must be in double quotes ("")
{
    "name": "radhe",          // key: "name", value: "radhe" (string)
    "courseName": "js in hindi",
    "price": "free"
}

// This represents a single object with properties

// API response can also be an array of objects:

[
    {
        // First object - usually contains related data fields
    },
    {
        // Second object
    },
    {
        // Third object
    }
]

// This format is useful to send multiple records (like multiple users, products, etc.)
