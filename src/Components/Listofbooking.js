import { useEffect, useState } from "react";

 
function App() {
  const [data, getData] = useState([]);
  const URL = "http://navatarbe-env.eba-drviydr6.us-east-2.elasticbeanstalk.com/getListOfBookingByIdandDate?booked_date=27-02-2023&navatar_id=1";
  let  NavatarId;
  let  BookingDate;
  useEffect(() => {
    fetchData();
  } );
  
  const fetchData = () => {
   
    fetch(URL)
      .then((res) => res.json())
 
      .then((response) => {
        console.log(response);
        getData(response);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger
      NavatarId = event.target.NavatarId.value;
      BookingDate = event.target.BookingDate.value;

      this.setState({ NavatarId: NavatarId})
      this.setState({ BookingDate: BookingDate})
      
     alert(this.state.NavatarId)
     alert(this.state.BookingDate)
  } 

  return (
    <form onSubmit={handleSubmit}>
      

 
        {/* <input type="text" />
     
     
       <input type="text" /> */}

  <input type="text" id="NavatarId" name="NavatarId" />

  <input type="text" id="BookingDate" name="BookingDate" />
       <input type="submit" value="Submit" />
  

 - 
    <div className="container">
     <table className="table table-striped">
    
      <tbody>
        <tr>
          <th>Booked  ID</th>
          <th>Booked Date</th>
          <th>Booked Timeslot</th>
          <th>User id</th>
          <th>Booked Status</th> <th>Navatar Id</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            {/* <td>{item.booked_id}</td> */}
            <td></td>
            <td>{item.booked_date}</td>
            <td>{item.booked_timeslot}</td>
            <td>{item.user_id}</td>
            <td>{item.booked_status}</td>
            {/* <td>{item.navatar_id}</td> */}
            <td></td>

          </tr>
        ))}
      </tbody>
      </table>
    
    </div>
    <label>

    </label>
    </form>
  );
}
 
export default App;