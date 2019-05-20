import React from 'react';

function HealthPlatform(){
    return (
        <div className="complicated-part row justify-content-center">
            <div class="healthcare-platform col-lg-4 col-md-12 col-sm-12">
                <h3>The world's biggest healthcare platform</h3>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            </div>
            <div class="little-cards col-lg-5 col-md-12 col-sm-12 row justify-content-center">
                <div class="first-block col-6 justify-content-end">
                    <div class="card vertical-center card-1" data-aos="fade-up">
                        <img class="card-img-top" src="https://www.docplanner.com/img/flag.png" alt="flag"></img>
                        <div class="card-body">
                            <h3 class="card-title">Leader in 10 countries</h3>
                            <p class="card-text">Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia,
                            Argentina and Chile</p>
                        </div>
                    </div>
                    <div class="card vertical-center " data-aos="fade-up">
                        <img class="card-img-top" src="https://www.docplanner.com/img/patients.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h3 class="card-title">30 million unique patients</h3>
                            <p class="card-text">visit us every month</p>
                        </div>
                    </div>
                </div>
                <div class="second-block col-6">
                    <div class="card vertical-center " data-aos="fade-up">
                        <img class="card-img-top" src="https://www.docplanner.com/img/visits.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h3 class="card-title">1 million appointments</h3>
                            <p class="card-text">booked last month</p>
                        </div>
                    </div>
                    <div class="card vertical-center " data-aos="fade-up">
                        <img class="card-img-top" src="https://www.docplanner.com/img/doctors.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h3 class="card-title">2 million active doctorsCard title</h3>
                            <p class="card-text">trust in our solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 )
} 

export default HealthPlatform;
