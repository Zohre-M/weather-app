import React from "react";

export default function Time(props) {
  const time = new Date(props.timeData * 1000);
  let WeekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let day = WeekDay[time.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
