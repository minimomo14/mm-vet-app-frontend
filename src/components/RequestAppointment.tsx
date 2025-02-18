import "./RequestAppointment.css";

function RequestAppointment() {
  return (
    <div className="RequestAppointment">
      <h1>REQUEST APPOINTMENT</h1>
      <h3>We would love the see you! You can complete this form for general visit or request a prescription refill.</h3>
      <p><ul>
        However, it is best to click the Request Appointment button to schedule an appointment or Login into <a href="/your-pets">Your Pet</a> Portal for:
      </ul></p>
      <li>Access your pet’s profile and medical records</li>
      <li>View upcoming services due</li>
      <li>View scheduled appointments</li>
      <br />
      <h4>Request an appointment time or request a prescription refill By fillout the form below...</h4>
      <form action="" className="form-container">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="pet-name">Pet Name:</label>
        {/* enter pet name or select dropdown  */}
        <input type="text" name="pet-name" id="pet-name" />
        {/* dropDownPet */}
        <select name="pet-name" id="pet-name">
          {}
        </select>
        <br />
        <label htmlFor="calendar">Date:</label>
        <input
          type="date"
          placeholder="MM/DD/YYYY"
          data-role="calendarpicker"
        ></input>
        <label htmlFor="time">Time:</label>
        <input type="time" placeholder="HH:MM AM/PM" />
        <label htmlFor="note">Reason For Request</label>
        <textarea name="note" id="note"></textarea>
        <br />
        <button type="submit">Request Appointment</button>
      </form>
    </div>
  );
}

export default RequestAppointment;
