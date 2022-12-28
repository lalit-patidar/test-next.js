import React from "react";
import styled from 'styled-components';
import Image from "next/image";

const CardWrapper = styled.div`
`

const MainStartWrapper  = styled.div`
height: calc(100% - 2rem);
`;

const Link = styled.a`
height: 45px;
width: 45px;
`
const WeekWrap = styled.div`
min-height: 250px;
background-color: #bbc9c7;
`;

const AddPlan = styled.span`
height: 45px;
width: 45px;
`


const PlanCard = () => {
    return (
        <CardWrapper className="col-lg-5">
                    <MainStartWrapper className="bg-white main-start-content my-3 p-4">
                        <div className="d-flex align-items-center justify-content-between pb-4">
                            <div>
                                <h5>Today's Plan</h5>
                                <h6 className="view-sm">June 14th 2022</h6>
                            </div>
                            <Link href="#" className="btn text-start rounded text-black fw-bold add-icon p-0">
                                <AddPlan className="d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-black">
                                <i className="fas fa-plus"></i></AddPlan>
                            </Link> 
                        </div>
                        <div>
                            <h4 className="fw-bold">
                                Sustainable development goals and health Innovation
                            </h4>
                            <div className="d-flex align-items-center justify-content-between my-3">
                                <Link href="#" className="btn text-start rounded text-black fw-bold add-icon p-0">
                                    <span className="d-inline-flex align-items-center justify-content-center rounded-circle text-black bg-white position-relative">
                                        <Image className="small h-100 w-100 rounded-circle" src="/profile-icon.png" alt="Profile" width={45} height={45}/>
                                    </span>
                                </Link>
                                <div className="border-start ps-3">
                                    <p className="view-sm text-black mb-1">Medi time meeting</p>
                                    <span className="view-sm">13:30 - 14:50</span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap align-items-start justify-content-between">
                                <WeekWrap className="d-flex flex-column align-items-start justify-content-between p-3 my-2  w-100">
                                    <div className="mb-auto">
                                        <h6 className="mb-1 fw-bold">Weekly Report</h6>
                                        <p>Track your performance</p>
                                    </div>
                                    <button className="btn border p-2 border-dark fw-bold text-uppercase view-sm text-black rounded-0">View Report</button>
                                </WeekWrap>
                                <WeekWrap className="d-flex flex-column align-items-start justify-content-between p-3 my-2" style={{backgroundColor: "#f6d9c5", width: '48%'}}>
                                    <div className="mb-auto">
                                        <h6 className="mb-1 fw-bold">Study 78x</h6>
                                        <p className="view-sm text-black"><i className="fas fa-clock me-2"></i> In progress</p>
                                    </div>
                                </WeekWrap>
                                <WeekWrap className="d-flex flex-column align-items-start justify-content-between p-3 my-2" style={{backgroundColor: "#f6d9c5", width: '48%'}}>
                                    <div className="mb-auto">
                                        <h6 className="mb-1 fw-bold">Analysis</h6>
                                        <p className="view-sm text-black"><i className="fas fa-clock me-2"></i>Completed</p>
                                    </div>
                                </WeekWrap>
                            </div>    
                        </div>
                    </MainStartWrapper>
                </CardWrapper>
    )
}

export default PlanCard;