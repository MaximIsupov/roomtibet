"use client";

import { use, useState, useRef, useEffect } from "react";
import "./DateIntervalSelect.css";

function Calendar({ onSelect, firstDate }: { onSelect: (date: Date) => void; firstDate: Date | null }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay() || 7;

  const hintText = firstDate ? 'Выберите конечную дату интервала' : 'Выберите первую дату интервала';

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const prevMonth = () => setMonth(m => (m === 0 ? (setYear(y => y - 1), 11) : m - 1));
  const nextMonth = () => setMonth(m => (m === 11 ? (setYear(y => y + 1), 0) : m + 1));

  return (
    <div className="calendar">
      <div className="calendar__hint">{ hintText }</div>
      <div className="calendar__header">
        <div onClick={prevMonth}>‹</div>
        <span>
          {monthNames[month]} {year} г.
        </span>
        <div onClick={nextMonth}>›</div>
      </div>
      <div className="calendar__grid">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(d => (
          <div key={d} className="calendar__dow">{d}</div>
        ))}
        {Array.from({ length: startDay - 1 }).map((_, i) => (
          <div key={`e${i}`} className="calendar__empty" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = new Date(year, month, i + 1);
          return (
            <div
              key={i}
              className={`calendar__day ${firstDate?.getTime() == date.getTime() ? 'choosen' : ''}`}
              onClick={() => onSelect(date)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DateIntervalSelect() {
  const [open, setOpen] = useState(false);
  const [selectedFirstDate, setSelectedFirstDate] = useState<Date | null>(null);
  const [selectedSecondDate, setSelectedSecondDate] = useState<Date | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
          setOpen( false );
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDateMenu = () => {
    setSelectedFirstDate(null);
    setSelectedSecondDate(null);
    setOpen( open => !open );
  }

  const selectDate = (date: Date) => {
    if (selectedFirstDate) {
      setSelectedSecondDate(date);
      setOpen( false );
    }
    else{
      setSelectedFirstDate(date)
    }
  }

  return (
    <div className="date-select 123" ref={wrapperRef}>
      <div className="date-select__wrapper" onClick={toggleDateMenu}>
        <span>{selectedSecondDate ? selectedFirstDate?.toLocaleDateString() + ' - ' + selectedSecondDate.toLocaleDateString() : "Дата похода"}</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_196)">
            <path d="M16.3125 18H1.6875C0.75375 18 0 17.2463 0 16.3125V2.8125C0 1.87875 0.75375 1.125 1.6875 1.125H16.3125C17.2463 1.125 18 1.87875 18 2.8125V16.3125C18 17.2463 17.2463 18 16.3125 18ZM1.6875 2.25C1.3725 2.25 1.125 2.4975 1.125 2.8125V16.3125C1.125 16.6275 1.3725 16.875 1.6875 16.875H16.3125C16.6275 16.875 16.875 16.6275 16.875 16.3125V2.8125C16.875 2.4975 16.6275 2.25 16.3125 2.25H1.6875Z" fill="#FDFDFD" />
            <path d="M5.0625 4.5C4.7475 4.5 4.5 4.2525 4.5 3.9375V0.5625C4.5 0.2475 4.7475 0 5.0625 0C5.3775 0 5.625 0.2475 5.625 0.5625V3.9375C5.625 4.2525 5.3775 4.5 5.0625 4.5ZM12.9375 4.5C12.6225 4.5 12.375 4.2525 12.375 3.9375V0.5625C12.375 0.2475 12.6225 0 12.9375 0C13.2525 0 13.5 0.2475 13.5 0.5625V3.9375C13.5 4.2525 13.2525 4.5 12.9375 4.5ZM17.4375 6.75H0.5625C0.2475 6.75 0 6.5025 0 6.1875C0 5.8725 0.2475 5.625 0.5625 5.625H17.4375C17.7525 5.625 18 5.8725 18 6.1875C18 6.5025 17.7525 6.75 17.4375 6.75Z" fill="#FDFDFD" />
        </g>
        <defs>
            <clipPath id="clip0_1_196">
            <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
        </svg>
      </div>
      <div className="custom-select__hint">укажите диапазон</div>
      <div className={`calendar-modal__content ${open ? '' : 'hidden'}`}>
        <div className="calendar-modal__close" onClick={() => setOpen(false)}>✕</div>
        <Calendar
          onSelect={(date) => {
            selectDate(date);
          }}
          firstDate = {selectedFirstDate}
        />
      </div>
    </div>
  );
}
