import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
    return (
        <div className="expense-list">
            {props.items.map((item, index) =>
                <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )}
        </div>
    );
}

export default ExpenseList;
