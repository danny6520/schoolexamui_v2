import React from 'react';
import SchoolinfofetchServiceAPI from '../Services/SchoolinfofetchServiceAPI';



class Schoolinfofetchcomponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            schoolinfo:[]
        }
    }

    componentDidMount() {
        SchoolinfofetchServiceAPI.getSchoolinfo().then((res) => {
            this.setState({schoolinfo: res})
        });
    }

    render () {

        return (
            <div>
                <h1><center>School Info</center></h1>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>School ID</td>
                            <td>User Name</td>
                            <td>Password</td>
                            <td>School Name</td>
                            <td>Principal Name</td>
                            <td>School Address</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Country</td>
                            <td>Pincode</td>
                            <td>Email</td>
                            <td>Website</td>
                            <td>Contact No</td>
                            <td>Created by</td>
                            <td>Last updated by</td>
                            <td>Updated date time</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.schoolinfo.map(
                                school =>
                                <tr key = {school.pk_school_id}>
                                    <td> {school.pk_school_id} </td>
                                    <td> {school.user_name} </td>
                                    <td> {school.password} </td>
                                    <td> {school.school_name} </td>
                                    <td> {school.principal_name} </td>
                                    <td> {school.school_address} </td>
                                    <td> {school.city} </td>
                                    <td> {school.state} </td>
                                    <td> {school.country} </td>
                                    <td> {school.pincode} </td>
                                    <td> {school.email} </td>
                                    <td> {school.website} </td>
                                    <td> {school.contact_no} </td>
                                    <td> {school.created_by} </td>
                                    <td> {school.last_updated_by} </td>
                                    <td> {school.last_updated_date_time} </td>
                                    <td> {school.school_status} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default Schoolinfofetchcomponent