module.exports.config = {
  name: "power",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "RiisHaD SoBuJ",
  description: "Bangla gali diye war start korbe",
  commandCategory: "group",
  usages: "power @mention",
  cooldowns: 15
};

module.exports.run = async function ({ api, event }) {
  const mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("⚠️ কাউকে ট্যাগ করো প্রথমে!", event.threadID);

  const tagName = event.mentions[mention].replace("@", "");
  const tag = [{ id: mention, tag: tagName }];
  const send = msg => api.sendMessage(msg, event.threadID, event.messageID);

  const messages = [
    `😈 ওই ${tagName}, শোন তোর খবর আছে`,
    "তোর মতো হারামজাদা আমি জীবনে দেখি নাই 🤬",
    "তুই চুদি ছাগলের বাচ্চা 🐐",
    "তোর বাপের পকেট থেকে কনডম চুরি করে তুই জন্ম নিছস 🤡",
    "তোর মায়েরে এতবার চুদি যে দরজার মতো খুলে গেছে 😏",
    "তোর বোনরে এতবার চুদি, এখন সে আমাকে আব্বু ডাকে 👨‍👧",
    "তোর পেছনের গর্তে ঘাস উঠছে, একটু ছাটিয়ে নিস 😂",
    "তোর মত চরিত্রহীন পোকা আমি টয়লেটে মারি 🚽",
    "তুই একটা কন্ডমের ভুল ব্যবহার 😐",
    "তুই গালি শুনে পাগল হয়ে যাবি এখন থেকে 😎",
    "আয় আয় আয় তোরে চুদে ডাইনোসর বানায় দেই 🦖",
    "তোরে চুদি ঘড়ির মতো, প্রতিদিন সময়মতো ⏰",
    "তুই এত হারামি যে তোর নাম হারামখোর 😆",
    "তোরে আমি ফ্রিতে চুদি, অফারে না 😏",
    "তুই চুদি কাঠালের বিচি 🍈",
    "তোর মুখে চুদি শব্দ ফ্রি দিয়া বসাই দেই 🗣️",
    "চুপ থাক পাগলা, না হলে তোরে আবার শুরু করব 😤",
    "তুই ফকিন্নি, তোর বাপ আমার ধার দেয় 😅",
    "তোরে দেখে ঘোড়া হাসে 🐴",
    `এই ${tagName}, গালি উপভোগ করলি তো? নেক্সট এপিসোডে আবার দেখা হবে 😉`
  ];

  messages.forEach((msg, index) => {
    setTimeout(() => send({ body: msg, mentions: tag }), index * 4000);
  });
};
