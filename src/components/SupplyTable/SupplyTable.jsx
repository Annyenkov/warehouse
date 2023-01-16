const SupplyTable = ({onClick, data}) => {
  return (
    <>
      <div>
        <h2>Приемки</h2>
        <button onClick={onClick}>Приемка</button>
        <button>Фильтр</button>
        <label>
          <input/>
        </label>
        <button>Статус</button>
        <button>Печать</button>
      </div>
      <table>
        <thead>
        <tr>
            <th>x</th>
            <th>№</th>
            <th>Время</th>
            <th>На склад</th>
            <th>Контрагент</th>
            <th>Организация</th>
            <th>Сумма</th>
            <th>Валюта</th>
            <th>Оплачено</th>
            <th>Отправлено</th>
            <th>Напечатано</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && data.map(({number, date, organisation, counterparty, currency, storage}) => {
            return (
              <tr key={number}>
                <td>X</td>
                <td>{number}</td>
                <td>{date}</td>
                <td>{storage}</td>
                <td>{counterparty}</td>
                <td>{organisation}</td>
                <td>сумма</td>
                <td>{currency}</td>
                <td>Оплачено</td>
                <td>Отправлено</td>
                <td>Напечатано</td>
                <td>Комментарий</td>
          </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default SupplyTable;