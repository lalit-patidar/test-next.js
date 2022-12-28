import React from "react";
import styled from "styled-components";
import Image from "next/image";

const PinnedWrapper = styled.div`
height: calc(100% - 2rem);
`

const Link = styled.a`
font-size: 12px;
color: #a29e9b;
`;

const LearningTypes = styled.div`
height: 65px;
width: 65px;
background-color: #e9e9e9;
`;

const LearningTypesWrper = styled.div`
grid-template-columns: 50% 50%;
`;

const Title = styled.h6`
font-size: 12px;
color: #a29e9b;
`;

const ProcessStatus = styled.div`
font-size: 12px;
span {
    height: 20px;
    width: 20px;
    background-color: #f9dabc;
};
`

const MontlyPinned = () => {
    return (
        <div className="col-lg-5">
                    <PinnedWrapper className="my-3 py-4 px-3">
                        <div className="d-flex align-items-center justify-content-between pb-3">
                            <div>
                                <h6 className="fw-bold mb-0">Monthly Pinned</h6>
                            </div>
                            <Link href="#" className="btn text-start rounded text-decoration-none text-gray fw-bold add-icon view-sm p-0">
                               View all
                            </Link> 
                        </div>
                        <div className="d-block">
                            <div className="border d-flex align-items-start justify-content-between p-3 my-3 pro-info">
                                <div>
                                    <Title className="mb-1 view-sm fw-bold">Next gen Immuno</Title>
                                    <p className="fw-bold">Multispecific liquid Analysis</p>
                                
                                    <ProcessStatus className="pro-sec pro-1"><span className="d-inline-flex align-items-center justify-content-center rounded-circle me-2 num-process">1</span>New Feedback</ProcessStatus>
                                </div>
                                <Link href="#" className="btn text-start rounded text-decoration-none text-gray fw-bold add-icon view-sm p-0">
                                5d
                                </Link> 
                            </div>
                            <div className="border d-flex align-items-start justify-content-between p-3 my-3 pro-info">
                                <div>
                                    <Title className="mb-1 view-sm fw-bold">Harmony</Title>
                                    <p className="fw-bold">Protein Characterization during childhood and pregnancy</p>
                                
                                    <ProcessStatus className="pro-sec pro-2">
                                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-2 num-process text-white" style={{backgroundColor: '#1d1d1d'}}>!</span>
                                        Deadline is today
                                    </ProcessStatus>
                                </div>
                                <Link href="#" className="btn text-start rounded text-decoration-none text-gray fw-bold add-icon view-sm p-0">
                                5d
                                </Link> 
                            </div>
                            <div className="border d-flex align-items-start justify-content-between p-3 my-3 pro-info">
                                <div>
                                    <Title className="mb-1 view-sm fw-bold">Pharmaceutical</Title>
                                    <p className="fw-bold">Quick element dissolution testing</p>
                                
                                    <ProcessStatus className="pro-sec pro-3">
                                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-2 num-process text-white" style={{backgroundColor: '#a4bdc7'}}>!</span>
                                        Accepted
                                    </ProcessStatus>
                                </div>
                                <Link href="#" className="btn text-start rounded text-decoration-none text-gray fw-bold add-icon view-sm p-0">
                                5d
                                </Link> 
                            </div>
                        </div> 
                        <div className="d-flex align-items-start justify-content-between pb-1 pt-3">
                            <div>
                                <h6 className="mb-2 fw-bold">My Learnings</h6>
                                <p>Yor progressof medical lecture</p>
                            </div>
                            <Link href="#" className="btn text-start rounded text-decoration-none text-gray fw-bold add-icon view-sm p-0">
                                <i className="fas fa-ellipsis-h"></i>
                            </Link> 
                        </div> 
                        <LearningTypesWrper className="d-grid grid-opt">
                            <div className="d-flex align-items-start my-3">
                                <LearningTypes className="d-flex align-items-center justify-content-center learning-types">
                                    <Image width={28} height={28} src="/learning-img1.png" alt="Learning"/>
                                </LearningTypes>
                                <div className="px-2">
                                    <h6 className="fw-bold">Viruses</h6>
                                    <p className="view-sm">96% Progress</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <LearningTypes className="d-flex align-items-center justify-content-center learning-types">
                                    <Image width={28} height={28} src="/learning-img2.png" alt="Learning"/>
                                </LearningTypes>
                                <div className="px-2">
                                    <h6 className="fw-bold">Bacterial cells</h6>
                                    <p className="view-sm">33% Progress</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <LearningTypes className="d-flex align-items-center justify-content-center learning-types">
                                    <Image width={28} height={28} src="/learning-img3.png" alt="Learning"/>
                                </LearningTypes>
                                <div className="px-2">
                                    <h6 className="fw-bold">Med Science</h6>
                                    <p className="view-sm">7% Progress</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <LearningTypes className="d-flex align-items-center justify-content-center learning-types">
                                    <Image width={28} height={28} src="/learning-img4.png" alt="Learning"/>
                                </LearningTypes>
                                <div className="px-2">
                                    <h6 className="fw-bold">Human gens</h6>
                                    <p className="view-sm">58% Progress</p>
                                </div>
                            </div> 
                        </LearningTypesWrper>     
                    </PinnedWrapper>
                </div>
    )
}

export default MontlyPinned;