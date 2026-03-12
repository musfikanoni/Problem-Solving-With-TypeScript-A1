# TypeScript-এ keyof কিওয়ার্ডের ব্যবহার কী? উদাহরণসহ ব্যাখ্যা

TypeScript-এ keyof একটি টাইপ অপারেটর যা কোনো অবজেক্ট টাইপের সকল কী (key) নিয়ে একটি ইউনিয়ন টাইপ (union type) তৈরি করে। এটি মূলত টাইপ-সেফটি বজায় রাখতে এবং ডায়নামিকভাবে প্রপার্টি অ্যাক্সেস করতে ব্যবহৃত হয়।

interface Person {
name: string;
age: number;
email: string;
}

// `keyof Person` দিয়ে Person ইন্টারফেসের সকল কী-এর টাইপ
type PersonKeys = keyof Person; // "name" | "age" | "email"

// Generic function যেখানে key টাইপ-সেফ
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

const person: Person = {
name: "Musfika",
age: 20,
email: "musfika@example.com"
};

console.log(getProperty(person, "name")); // ✅ "Musfika"
// console.log(getProperty(person, "phone")); // ❌ এরর: `phone` Person-এর কী নয়

কেন ব্যবহার করবো?

    💠 টাইপ-সেফ প্রপার্টি অ্যাক্সেস নিশ্চিত করে
    💠 জেনেরিক ফাংশনে ডায়নামিক কী হ্যান্ডলিং সহজ করে
    💠 অবজেক্টের কী-গুলোর টাইপ সহজেই বের করা যায়



# TypeScript-এ enum এর ব্যবহার কী? Numeric ও String Enum-এর উদাহরণ

Enum (Enumerations) TypeScript-এ একটি ডেটা টাইপ যা নির্দিষ্ট কিছু কনস্ট্যান্ট ভ্যালুর সেট ডিফাইন করতে ব্যবহৃত হয়। এটি কোডকে আরও রিডেবল এবং মেইনটেইনেবল করে তোলে।

Numeric Enum:

    enum Status {
    Pending,   // 0
    Approved,  // 1
    Rejected   // 2
    }

    let currentStatus: Status = Status.Approved;
    console.log(currentStatus); // output: 1

    // মান নিজেও সেট করা যায়
    enum UserRole {
    Admin = 5,
    Editor = 10,
    Viewer = 15
    }
    console.log(UserRole.Admin); // output: 5

String Enum:

    enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
    }

    function move(direction: Direction) {
    console.log(`Moving towards: ${direction}`);
    }

    move(Direction.Up); // Output: Moving towards: UP

    // বিপরীত ম্যাপিং (string enum-এ কাজ করে না)
    // console.log(Direction["UP"]); // error


কখন enum ব্যবহার করবো?

    💠 যখন নির্দিষ্ট কয়েকটি অপশন থাকে (যেমন: সপ্তাহের দিন, ইউজার রোল, HTTP স্ট্যাটাস কোড)
    💠 কোডে ম্যাজিক নাম্বার বা স্ট্রিং এড়াতে
    💠 সুইচ-কেস বা শর্ত যাচাইয়ে টাইপ সেফটি চাইলে


টিপস:

    ✅ Numeric enum ডিফল্টভাবে 0 থেকে শুরু হয়
    ✅ String enum প্রতিটি মেম্বারের মান স্ট্রিং হিসেবেই থাকে
    ✅ Enum-এর পরিবর্তে Union Types ব্যবহার করাও অনেক ক্ষেত্রে ভালো অপশন



সারসংক্ষেপ:

    🔴 keyof অবজেক্ট টাইপের কী-গুলোর টাইপ বের করতে ব্যবহৃত হয়
    🔴 enum নির্দিষ্ট কনস্ট্যান্ট ভ্যালুর গ্রুপ তৈরি করতে ব্যবহৃত হয়

এই দুটি টুল TypeScript-এ টাইপ সিস্টেমকে আরও শক্তিশালী এবং নিরাপদ করে তোলে।