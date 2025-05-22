import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  function handleChange(e) {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate);
  }

  // Calculate age components
  let years = today.getFullYear() - date.getFullYear();
  let months = today.getMonth() - date.getMonth();
  let days = today.getDate() - date.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Next birthday calculation
  const nextBirthday = new Date(
    today.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const diffMs = nextBirthday - today;
  const daysUntilBirthday = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return (
    <main>
      <div className="head">Age Calculator</div>
      <div className="container">
        <div className="bir">Your Birth Date</div>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={handleChange}
        />
        <p className="age" style={{ fontWeight: "bolder" }}>
          <span style={{ color: "rgb(247, 139, 182)", fontSize: "large" }}>
            Age:
          </span>{" "}
          {years} years, {months} months, {days} days
        </p>
        <p className="next">
          Next birthday in:{" "}
          <span style={{ fontWeight: "bolder", color: "rgb(254, 77, 148)" }}>
            {daysUntilBirthday} day
            {daysUntilBirthday !== 1 ? "s" : ""}🎂
          </span>
        </p>
      </div>
      <p className="foot">
        © {new Date().getFullYear()} Srri AgeCalculator. All rights reserved.
      </p>
    </main>
  );
}

export default App;
