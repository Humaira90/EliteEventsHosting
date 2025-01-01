// backend/controllers/chatbotController.js
export const getChatbotResponse = (req, res) => {
    const userMessage = req.body.message.toLowerCase();
  
    const responses = {
      "what services do you offer": "We offer a wide range of event planning services including venue selection, catering, decor, event coordination, and more! Let us know what you need, and we'll make it happen.",
      "how can i book an event": "To book an event, you can visit our 'Book an Event' page or contact us directly through our website. Our team will help you through the entire booking process.",
      "do you offer virtual event planning": "Yes, we specialize in both in-person and virtual events. Whether you need assistance with a virtual conference or an online celebration, we've got you covered.",
      "how much do your services cost": "Our pricing varies depending on the type of event and services required. Feel free to contact us for a customized quote based on your event needs.",
      "do you offer any discounts": "We occasionally offer seasonal promotions and discounts for certain types of events. Please check our website or sign up for our newsletter to stay updated.",
      "can you help with wedding planning": "Absolutely! We specialize in creating beautiful and stress-free weddings. From venue selection to catering, we’ll work with you to make your big day unforgettable.",
      "do you organize corporate events": "Yes, we offer corporate event planning services such as conferences, seminars, team-building events, and company parties. Contact us to discuss your requirements.",
      "can i have a theme for my event": "Of course! Whether you want a traditional, modern, or quirky theme, we’ll tailor the event design to match your vision.",
      default: "Sorry, I didn't understand that. Can you ask something else?"
    };
  
    const response = responses[userMessage] || responses.default;
    res.json({ message: response });
  };
  