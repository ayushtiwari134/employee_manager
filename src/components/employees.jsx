import React from 'react'
import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

const Employees = ({ selectedTeam, employees, cardClicked, changeTeam }) => {


    return (
        <div className='container '>
            <div className="row justify-content-center mt-4 mb-3">
                <div className='col-6'>
                    <select className='form-select form-select-lg' value={selectedTeam} onChange={changeTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-4 mb-3">
                <div className='col-8'>
                    <div className="gridContainer">
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className={(selectedTeam === employee.teamName) ? 'card m-2 borders pointer' : 'card m-2 pointer'} onClick={cardClicked}>
                                    {(employee.gender == 'female') ? <img src={femaleProfile} className='card-img-top' /> : <img src={maleProfile} className='card-img-top' />}
                                    <div className="card-body">
                                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                        <p className="card-text">Designation: {employee.designation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees;