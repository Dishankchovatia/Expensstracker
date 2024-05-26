import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={() => props.onDelete(props.id)} className="delete-button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
