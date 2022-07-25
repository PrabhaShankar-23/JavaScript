import React from 'react'

const publishPane = () => {
  return (
    <div className='publishTitle'>
        <section className='publisherDetails'>
        <section className='backbutton'>
             <img className='backButtonImage' src=".\img\bi_arrow-left-circle-fill.png" alt="backbutton Icon" />
        <span className='text--backToAccount'>Back to Account</span>
        </section>
            <section className='startswithHabit'>It all starts with a habit</section>
            <section className='writingAbook'>Writing a book is not that difficult... </section>
            <section className='text--booktitle'>Book Title </section>
             <input className='publish--booktitle'
                type="text" 
                id="book" 
                placeholder='Enter your book’s name'
                // onChange={handleDetails}

                name="book">

                </input>
            <section className='grey publishLine'></section>


            <section className='text--author'>Author's Name </section>

             <input 
            type="text" 
            id="name" 
            placeholder='Enter your name'           
            name="name"
            className='publish--booktitle btn-publish'
            // onChange={handleDetails}
            ></input>
            <section className='grey publishLine'></section>
            
            <button 
            // onClick = {handleClick}
            className='btn--login btn--details'
            >Save the Details</button>
        </section>
        <section>
            <img src=".\img\bro.png" alt="writer task" />
        </section>
        
     </div>
  )
}

export default publishPane