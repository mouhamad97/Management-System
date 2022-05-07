import React from 'react'
import './BillingForm.css'
function BillingForm() {
    return (
        <div>
            <h1 className='header'>Create New Bill</h1>
            <form action="" className='BillContainer'>
                <label className='billLablel'>Installation Type</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Warranty Timeline</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Special Conditions</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Payment Type</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Percentage</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Source</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Supplier</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Installation Details</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Number Of plates</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Type Of Plates</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>State of plates</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Infeter Type</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Metal installation</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Battery Types</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Camera Type</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Hard Drive</label>
                <input className='BillInput' type="text" /><br />
                <label className='billLablel'>Power Supply</label>
                <input className='BillInput' type="text" />
                <label className='billLablel'>Proection type</label>
                <input className='BillInput' type="text" />
                <label className='billLablel'>Team</label>
                <textarea className='BillInput teamInput' type="text" /> <br></br>
                <button className='billingFormButton '>Create</button>
            </form>
        </div>
    )
}

export default BillingForm