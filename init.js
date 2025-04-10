const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); 

main().then(() => {console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
} 


let allChats = [
    {
    from: "ayra",
    to: "umam",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from: "isha",
    to: "kabir",
    msg: "did you complete the physics sheet?",
    created_at: new Date()
  },
  {
    from: "arjun",
    to: "meher",
    msg: "send me the notes for chapter 6",
    created_at: new Date()
  },
  {
    from: "tanya",
    to: "dev",
    msg: "I missed today's lecture, help?",
    created_at: new Date()
  },
  {
    from: "veer",
    to: "aliya",
    msg: "do you have the math solutions?",
    created_at: new Date()
  },
  {
    from: "rhea",
    to: "aarav",
    msg: "please send your practical file",
    created_at: new Date()
  },
];  
Chat.insertMany(allChats);