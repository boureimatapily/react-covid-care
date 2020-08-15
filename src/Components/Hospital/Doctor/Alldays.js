import React from 'react'

export default function Alldays({day}) {
    return (
        <div>
            <h3>Monday: {day.mondayopen} | {day.mondayclose} </h3>
            <h3>Tuesday: {day.tuesdayopen} | {day.tuesdayclose}</h3>
            <h3>Wednesday: {day.wednesdayopen} | {day.wednesdayclose}</h3>
            <h3>Thursday: {day.thursdayopen} | {day.thursdayclose}</h3>
            <h3>Friday: {day.fridayopen} | {day.fridayclose}</h3>
            <h3>Saturday: {day.saturdayopen} | {day.saturdayclose}</h3>
            <h3>Sunday: {day.sundayopen} | {day.sundayclose}</h3>
        </div>
    )
}
