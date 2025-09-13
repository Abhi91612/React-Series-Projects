import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { InputBox } from "./Component/Index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

// Import Google Fonts in index.html or via CSS:
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo || {});

  // Animated number
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 15 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(2));
    });
    return () => unsubscribe();
  }, [springValue]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      const newValue = amount * currencyInfo[to];
      setConvertedAmount(newValue);
      motionValue.set(newValue);
    }
  };

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full h-screen flex justify-center items-center bg-cover bg-center relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Moving background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://cdn.impossibleimages.ai/wp-content/uploads/2023/04/25130031/AI-Background-Image-Generator-How-It-Works-and-Why-You-Need-It.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: `${50 - (mouseX - 50) / 10}% ${50 - (mouseY - 50) / 10}%`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      ></motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/50 via-purple-500/50 to-pink-500/50"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10 border border-gray-200 rounded-2xl p-8 backdrop-blur-xl bg-white/30 shadow-xl"
      >
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-lg tracking-wide">
            💱 Currency Converter
          </h1>

          {/* FROM input */}
          <InputBox
            label={from.toUpperCase()}
            amount={amount}
            currencyOption={option}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amt) => setAmount(amt)}
          />

          {/* Swap button */}
          <div className="flex justify-center my-2">
            <button
              type="button"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
              onClick={swap}
            >
              🔄 Swap
            </button>
          </div>

          {/* TO input */}
          <InputBox
            label={to.toUpperCase()}
            amount={displayValue}
            currencyOption={option}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* Convert button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:opacity-90 text-white px-4 py-3 rounded-lg shadow-md font-semibold tracking-wide"
          >
            🚀 Convert {from.toUpperCase()} to {to.toUpperCase()}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default App;
