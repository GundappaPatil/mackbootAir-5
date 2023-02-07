import "./App.css";

export default function Content() {
  return (
    <>
      <div className="container-1">
        <div className="cooper">
          <p>
            <h5>Diane Cooper</h5>
          </p>
          <span>diane.cooper@example.com</span>
        </div>
        <div className="firstrow">
          <div className="subrow">
            <span>Gender</span>
            <span>Female</span>
          </div>
          <div className="subrow">
            <span>Birthday</span>
            <span>Feb 24th,1997</span>
          </div>
          <div className="subrow">
            <span>Phone Number</span>
            <span>(239)555-0108</span>
          </div>
          <div className="subrow" id="member">
            <span>Member Status</span>
            <span>Active Member</span>
          </div>
          <div className="container-2">
            <div className="subrow">
              <span className="num">15</span>
              <span>Past</span>
            </div>
            <div className="subrow">
              <span className="num">02</span>
              <span>Upcoming</span>
            </div>
            <div className="subrow" id="ecg-report">
              <span className="report">VIEW ECG REPORT DOCUMENTS</span>
              {/* <span>Female</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
