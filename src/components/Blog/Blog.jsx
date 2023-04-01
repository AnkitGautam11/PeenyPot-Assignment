import React from 'react'
import './blog.css'
import pic from './pic.png'

const Blog = () => {
  return (
    <div className='main-container'>
        <div className="containers">
            <div className="inner-container1">
                <span>
                    <p style={{textAlign: 'center', paddingTop: '50px'}}>Latest Insights</p>
                    <hr style={{width: '100px', marginTop: '-10px', marginInline: 'auto'}}/>
                </span>
            </div>
            <div className="inner-container2">
                <div className='blogData'>
                    <div>
                        <h2 style={{ fontSize: '28px' }}>Life Insurance: Securing Your Future</h2>
                        <p style={{ fontSize: '10px' }}>Investing | 5 minute read</p>
                        <br/>
                        <div style={{ fontWeight: '250px' }}>
                            Death is an inevitability, and while it’s a difficult topic to discuss, planning for the future is essential. Life insurance is an investment in the future, which can provide financice security for your loved ones in the event of your untimely demise.
                        </div>
                    </div>
                    <button>Read Now</button>
                </div>

                <div className='blogData'>
                    <div>
                        <h2 style={{ fontSize: '28px' }}>Master Your Finances: Expert Tips and Strategies to Achieve Your Financial Goals</h2>
                        <p style={{ fontSize: '10px' }}>Investing | 5 minute read</p>
                        <img src={pic} alt="" />
                        <div style={{ fontWeight: '250px' }}>
                            Managing personal finances can be a daunting task, but with the right knowledge and strategies, anyone can create a roadmap to financial success. Whether you’re a seasoned investor or just starting to take control of your finances, this blog has something for everyone.
                        </div>
                    </div>
                    <button>Read Now</button>
                </div>

                <div className='blogData'>
                    <div>
                        <h2 style={{ fontSize: '28px' }}>Maximizing Your Savings with Post Office Monthly Income Scheme</h2>
                        <p style={{ fontSize: '10px' }}>Investing | 5 minute read</p>
                        <div style={{ fontWeight: '250px' }}>
                            If you’re looking for a safe and reliable investment option to generate a steady stream of monthly income, the Post Office Monthly Income Scheme (POMIS) is worth considering. Backed by the Government of India, this scheme offers attractive interest rates and guaranteed returns, making it a popular choice among conservative investors.
                        </div>
                    </div>
                    <button>Read Now</button>
                </div>
            </div>
            <div className="inner-container3">
                <button>Load More</button>
            </div>
        </div>
    </div>
  )
}

export default Blog