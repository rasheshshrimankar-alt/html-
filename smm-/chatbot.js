// SoleBot - AI Chatbot for SoleStep Footwear

const responses = {
  greet: {
    patterns: ['hello', 'hi', 'hey', 'helo', 'namaste', 'hii', 'sup', 'good morning', 'good evening'],
    replies: ["Hi there! 👋 Welcome to SoleStep! How can I help you today?", "Hey! 😊 I'm SoleBot. Ask me about shoes, sizes, delivery, or anything!", "Namaste! 🙏 Welcome to SoleStep. What are you looking for today?"]
  },
  products: {
    patterns: ['shoes', 'product', 'sneaker', 'nike', 'adidas', 'puma', 'formal', 'casual', 'running', 'sports', 'collection', 'footwear', 'boot', 'sandal', 'loafer', 'oxford'],
    replies: ["We have an amazing collection! 👟<br><br>• Nike Air Max 270 — ₹12,995<br>• Adidas Ultraboost 23 — ₹15,999<br>• Puma Velocity Nitro 2 — ₹8,999<br>• Clarks Formal Oxford — ₹4,499<br><br>Check our <a href='products.html'>Products page</a> for the full range!"]
  },
  price: {
    patterns: ['price', 'cost', 'rate', 'kitna', 'how much', 'cheap', 'expensive', 'budget', 'affordable', 'discount', 'offer', 'deal'],
    replies: ["Great news — we have shoes for every budget! 🎉<br><br>• Budget: ₹999 – ₹2,999<br>• Mid-range: ₹3,000 – ₹8,999<br>• Premium: ₹9,000+<br><br>Plus free delivery above ₹999! Check <a href='products.html'>Products</a> for current deals."]
  },
  delivery: {
    patterns: ['delivery', 'shipping', 'deliver', 'dispatch', 'courier', 'track', 'order', 'when', 'days', 'fast', 'express'],
    replies: ["🚚 Delivery Details:<br><br>• Free delivery above ₹999<br>• Standard: 3–5 business days<br>• Express: 1–2 business days<br>• Pan-India delivery available!<br><br>Track your order via confirmation email."]
  },
  return: {
    patterns: ['return', 'refund', 'exchange', 'replace', 'wrong size', 'damaged', 'policy', 'cancel'],
    replies: ["Our return policy is super easy! 🔄<br><br>• 30-day hassle-free returns<br>• Free return pickup<br>• Full refund or exchange<br>• Condition: unused, original packaging<br><br>Visit <a href='contact.html'>Contact page</a> to initiate a return."]
  },
  size: {
    patterns: ['size', 'sizing', 'fit', 'measurement', 'chart', 'uk', 'us', 'eu', 'number', 'small', 'large', 'medium'],
    replies: ["👟 Size Guide:<br><br>• Sizes: UK 5 to UK 12<br>• Available in UK, US & EU standards<br>• Size chart on every product page<br><br>Tip: If between sizes, go one size up for comfort!"]
  },
  contact: {
    patterns: ['contact', 'phone', 'email', 'address', 'location', 'reach', 'support', 'help', 'customer care', 'whatsapp', 'call'],
    replies: ["📞 Reach us anytime!<br><br>• Phone: +91 98765 43210<br>• Email: support@solestep.in<br>• WhatsApp: +91 98765 43210<br>• Address: LJ University, Ahmedabad<br><br>Or visit our <a href='contact.html'>Contact page</a>!"]
  },
  payment: {
    patterns: ['payment', 'pay', 'upi', 'card', 'cod', 'cash', 'online', 'gpay', 'paytm', 'netbanking', 'emi'],
    replies: ["💳 We accept all payment methods!<br><br>• UPI (GPay, PhonePe, Paytm)<br>• Credit/Debit Cards<br>• Net Banking<br>• Cash on Delivery (COD)<br>• EMI on orders above ₹3,000<br><br>All payments are 100% secure! 🔒"]
  },
  offer: {
    patterns: ['offer', 'sale', 'coupon', 'promo', 'code', 'discount', 'deal', 'off', 'percent'],
    replies: ["🔥 Current Offers:<br><br>• SOLE10 — 10% off on first order<br>• STEP20 — 20% off on orders above ₹5,000<br>• FREESHIP — Free express delivery<br><br>Apply at checkout. Limited time only!"]
  },
  affiliate: {
    patterns: ['affiliate', 'earn', 'commission', 'refer', 'partner', 'resell', 'income', 'money'],
    replies: ["💰 Join our Affiliate Program!<br><br>• Earn 10–15% commission per sale<br>• No investment required<br>• Weekly payouts<br>• Dedicated support<br><br>Visit our <a href='affiliate.html'>Affiliate page</a> to sign up!"]
  },
  brand: {
    patterns: ['brand', 'nike', 'adidas', 'puma', 'converse', 'vans', 'clarks', 'bata', 'reebok', 'asics', 'new balance'],
    replies: ["We carry top brands! 🏆<br><br>• Nike • Adidas • Puma<br>• Converse • Vans • Clarks<br>• Bata • ASICS • New Balance<br>• Reebok • Hush Puppies & more!<br><br>Browse all at <a href='products.html'>Products</a>."]
  },
  thanks: {
    patterns: ['thank', 'thanks', 'thankyou', 'great', 'awesome', 'perfect', 'nice', 'good', 'helpful', 'shukriya'],
    replies: ["You're welcome! 😊 Anything else I can help with?", "Glad I could help! 🙌 Happy shopping at SoleStep!", "Anytime! 👟 Walk in style, every step counts!"]
  },
  bye: {
    patterns: ['bye', 'goodbye', 'see you', 'later', 'ok bye', 'alvida', 'cya'],
    replies: ["Goodbye! 👋 Happy shopping at SoleStep! 👟", "See you soon! 😊 Walk in style, every step counts! 👟"]
  }
};

// Quick reply buttons shown on open
const quickReplies = [
  { label: '👟 Products',   msg: 'Show me your products' },
  { label: '💰 Price',      msg: 'What are your prices?' },
  { label: '🚚 Delivery',   msg: 'How long is delivery?' },
  { label: '🔄 Returns',    msg: 'What is your return policy?' },
  { label: '📏 Size Guide', msg: 'How do I find my size?' },
  { label: '💳 Payment',    msg: 'What payment methods do you accept?' },
  { label: '🔥 Offers',     msg: 'Any current offers or discounts?' },
  { label: '📞 Contact',    msg: 'How can I contact you?' },
];

const defaultReplies = [
  "Hmm, I'm not sure about that. 🤔 Try asking about products, delivery, returns, or pricing!",
  "I didn't quite get that! Use the quick buttons below or type your question. 😊",
  "I'm still learning! 🤖 Try: 'What shoes do you have?' or 'How long is delivery?'"
];

function getBotReply(msg) {
  const lower = msg.toLowerCase().trim();
  for (const key in responses) {
    const { patterns, replies } = responses[key];
    if (patterns.some(p => lower.includes(p))) {
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

function renderQuickReplies() {
  const messages = document.getElementById('chat-messages');
  // Remove old quick replies if any
  const old = messages.querySelector('.quick-replies-wrap');
  if (old) old.remove();

  const wrap = document.createElement('div');
  wrap.className = 'quick-replies-wrap';

  quickReplies.forEach(({ label, msg }) => {
    const btn = document.createElement('button');
    btn.className = 'quick-reply-btn';
    btn.textContent = label;
    btn.onclick = () => {
      wrap.remove();
      sendQuick(msg);
    };
    wrap.appendChild(btn);
  });

  messages.appendChild(wrap);
  messages.scrollTop = messages.scrollHeight;
}

function sendQuick(msg) {
  const messages = document.getElementById('chat-messages');

  const userDiv = document.createElement('div');
  userDiv.className = 'user-msg';
  userDiv.textContent = msg;
  messages.appendChild(userDiv);

  const typing = document.createElement('div');
  typing.className = 'bot-msg typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const botDiv = document.createElement('div');
    botDiv.className = 'bot-msg';
    botDiv.innerHTML = getBotReply(msg);
    messages.appendChild(botDiv);
    // Show quick replies again after answer
    renderQuickReplies();
  }, 700);
}

function toggleChat() {
  const box = document.getElementById('chatbot-box');
  const btn = document.getElementById('chatbot-btn');
  const isOpen = box.classList.toggle('open');
  btn.textContent = isOpen ? '✕' : '💬';
  if (isOpen) {
    renderQuickReplies();
    document.getElementById('chat-input').focus();
  }
}

function sendMsg() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById('chat-messages');

  // Remove quick replies
  const qr = messages.querySelector('.quick-replies-wrap');
  if (qr) qr.remove();

  const userDiv = document.createElement('div');
  userDiv.className = 'user-msg';
  userDiv.textContent = msg;
  messages.appendChild(userDiv);

  input.value = '';

  const typing = document.createElement('div');
  typing.className = 'bot-msg typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const botDiv = document.createElement('div');
    botDiv.className = 'bot-msg';
    botDiv.innerHTML = getBotReply(msg);
    messages.appendChild(botDiv);
    renderQuickReplies();
  }, 800);
}
