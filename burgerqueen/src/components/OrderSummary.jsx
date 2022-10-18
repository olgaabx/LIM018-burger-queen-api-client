import '../orderSummary.css';

export default function OrderSummary() {
  return (
    <>
      <form action="" className='formOrder'>
       <section className='orderContainer'>
          <table>
            <tr>
            <th className='titleOrder'>Cantidad</th>
              <th className='titleOrder'>Productos</th>
              <th className='titleOrder'>Total</th>
              <th className='titleOrder'></th>
            </tr>
    
            <tr>
                <td id= 'quantity'>a</td>
                <td id= 'products'>b</td>
                <td id= 'total'>c</td>
                <td id= 'editDelete'>d</td>
            </tr>
          </table>
       </section>
       <section className='DataClientContainer'>
        <div className='dataClient'>
           <div >
             <label htmlFor="Cliente">Cliente:</label>
             <input type="text" className='inputClient' />
           </div>
           <div >
              <label htmlFor="Mesa"># Mesa:</label>
              <input type="text" className='inputClient'/>
            </div>
        </div>  
        <button type='button' className='btnSendOrder'>Enviar a cocina</button>
       </section>   
    </form>
  </>
    
  )
}
