import React, { useEffect } from "react";
import "./app.css";
import FAQLineElement from "./FAQLineElement";
import Legal from "../legal/Legal";

const FAQ = ({ setSelectedLink }) => {
  useEffect(() => {
    window.scroll(0, 0);
    setSelectedLink(2);
  });
  const faqData = [
    [
      "Q- What is the account size I should have to begin thinking about selling Puts?",
      "An account with $10,000 can get you started, $50,000 is more ideal and $100k is the preferred starting account size - Having an account under $100,000 reduces the playing field on the equities we can write against. Remember, you are working with your own brokerage account, and you are the one placing your own trades.",
    ],
    [
      "Q- You did over 20% realized in the first month of 2021, is that normal?",
      "Normal no, that has come through an extreme bull market. It is my goal, to educate you on how to take advantage of every market condition- we have great months, and we try and minimize the losing months as best as we can- because everyone goes through a bad month or two.",
    ],
    [
      "Q- What are your thoughts on Covered Calls?",
      'I love them! I traded them for a long time and I always tell people, “when selling a covered call, it’s a beautiful thing when your stock gets called away, that means you made max profit when you made the trade. You cant think about the missed upside if you’re not a growth investor, and growth investors should not be writing options, calls, or puts!” I just found my personal performance was significantly better selling puts. I also found that even covered call writers had rarely ventured into selling puts, they just never explored it very much. I should add, in many circumstances when I am assigned the stock if my trade is put to me, I will write a covered call and take income that way. You will see, when we are "put" a stock, I will tell you the covered call I am writing or if I am selling the equity altogether.',
    ],
    [
      "Q- Do you use any advanced options strategies?",
      "I have, and I do when I am speculating, gets my cost basis down- but ThePutsGuys is for income generation. But if anyone wants to use the income from selling a put to buy a call on the same equity, or simply want to buy stock with the income from the Put sale, that is up to each person. Bullish Put Spreads are a fantastic instrument, when used correctly and for the right purpose.",
    ],
    [
      "Q- What percent of your account do you place in one trade?",
      "That’s something we discuss when you become a member - I will say, I am extremely careful about the unforeseen event that will drop the markets to limit down out of the blue- those types of days do come and they wreck accounts.",
    ],
    [
      "Q- Is our trading account with you? Are you making the actual trades for us? If no, what brokerage should I use?",
      "You make the trades; there are videos embedded in the site that show you the simple process of “Sell to Open” and “Buy to Close” Your membership gives you instant access to my trades, my watchlist, and my list of equities that I focus the most on when looking for the best premiums and trades. You also get a consultation where we can discuss your personal trading goals. Pick a brokerage that has the lowest commissions, after that, look for the ones that get the best trade fills on your limit orders. Nothing worse than putting in an order and seeing someone else got filled for the same price as you and you got left out. The more well-established sites typically are the way to go. ",
    ],
    [
      "Q- Does Warren Buffett do this?",
      "1988 wasn’t just a phenomenal year for the Lakers and Dodgers, that year,  Buffett made $7.5 million selling puts on one of his favorite investments, Coca-Cola! Buffett built his fortune on being an insurer! You receive your premiums (income) upfront when you (buy to open) and if an “insurance claim” is needed, you pay the claim out (buy buying the stock at the strike price)- Selling puts really is like selling insurance to the person who is buying the put. The put buyer is protecting their investments from a downturn in the market,(some are buying as a way to short a company, or cut back on some losses)-",
    ],
  ];
  return (
    <>
      <div className="faq-page-container">
        <img
          loading="lazy"
          alt="faq"
          src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <div className="faq-line-item-container">
          {faqData.map((item) => (
            <FAQLineElement question={item[0]} answer={item[1]} key={Math.random() * 1000} />
          ))}
        </div>
      </div>
      <Legal />
    </>
  );
};

export default FAQ;
