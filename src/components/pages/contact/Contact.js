import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Contact() {

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/")
  }

  const handleBack = () => {
    Navigate(-1)
  }

  return (
    <>
      <p>If you're contacting us via email, please make sure to include a clear and concise subject line that summarizes your inquiry. This will help ensure that your message gets to the right person and is responded to in a timely manner.</p>
      <p>In your message, please provide as much information as possible so that we can better assist you. This might include your name, contact information, and any relevant details about your inquiry or issue.</p>
      <p> We strive to respond to all inquiries within a reasonable timeframe and look forward to hearing from you.</p>
      

      <Button variant="success" onClick={handleClick}>Go To HomePage</Button>{' '}
      <Button variant="warning" onClick={handleBack}>Back</Button>{' '}
    </>
  )
}

export default Contact