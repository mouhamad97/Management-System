import React from 'react'


function MaintenanceForm() {
  return (
    <div>
    <h1 className='header'>Create Maintenace</h1>
    <form action="" className='BillContainer'>
        <label className='billLablel'>Type</label>
        <input className='BillInput' type="text" /><br />
        <label className='billLablel'>Date Of Maintenance</label>
        <input className='BillInput' type="text" /><br />
        <label className='billLablel'>Amount</label>
        <input className='BillInput' type="text" /><br />
        <label className='billLablel'>Description</label>
        <textarea className='BillInput' type="text" /><br />
        
    </form>
</div>
  )
}

export default MaintenanceForm