import React from 'react'

const Header = ({ selectedTeam, totalCount }) => {
    return (
        <div className="container pt-5 mt-4 d-flex flex-column justify-content-center align-items-center ">
            <h1>Team Member Allocation</h1>
            <h3>{selectedTeam} has <b>{totalCount}</b> people in it.</h3>
        </div>
    )
}

export default Header;
