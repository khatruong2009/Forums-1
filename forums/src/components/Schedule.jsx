import React from "react";

function Schedule() {
  return (
    <section id="schedule" className="section-with-bg">
            <div className="container-fluid" data-aos="fade-up">
                <div className="section-header">
                    <h2>Agenda Preview</h2>
                </div>

                <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
                    <li className="nav-item">
                        <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Track A</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Track B</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Strategic Workshops</a>
                    </li>
                </ul>

                <h3 className="sub-heading">At a time of enormous change worldwide, we bring together top leadership to discuss global economic recovery and develop 50+ real project opportunities in the Global Marketplace (a $2.5 trillion annual market), across all infrastructure sectors – transportation, energy, water/wastewater and digitization. “Vision and Leadership; Creating Tomorrow’s World” brings the major projects together with key funders, critical technology disruptors and great designers and builders.</h3>

                <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

                    {/* Schdule Day 1 */}
                    <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
                        <h2>Track A: Plenary</h2>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>7:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/8873692564475474448">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10 ">
                                <h4>Top 5 Asian Projects Live (Breakfast in Washington, Lunch in Europe & Dinner in Asia)!</h4>
                                <br/>
                                <p>Special Keynote:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/4360" className="schedule-link">Parag Khanna, Founder & Managing Partner, FutureMap</a></strong></p>
                                <br/>
                                <p>Parag Khanna is a leading global strategy advisor, world traveler, and best-selling author. He is Founder & Managing Partner of FutureMap, a data and scenario based strategic advisory firm. Parag’s newest book, The Future is Asian: Commerce, Conflict & Culture in the 21st Century(2019), presents this irrepressible global Asianization through detailed analysis, data and maps of Asia’s major markets and their combined impact on global economy, society and governance.</p>
                                <br />
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/ali-jinnah-supper-specialty-hospital" className="schedule-link">Ali Jinnah 250 Bed Hospital</a>Afghanistan, <a href="https://www.gvip.io/expertise/4028" className="schedule-link"> Matin Zahid, Head of PPP Unit</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/the-clara-plan" className="schedule-link">The Clara Plan</a>,Australia,<a href="https://www.gvip.io/expertise/4378" className="schedule-link">Mr. Nick Cleary, Chairman & CEO</a></strong></p>
                                <p><strong>Digital Silk Way Georgia, Azerbaijan and Kazakhstan,<a href="#speaker" className="schedule-link">Mr. Teymur Taghiyev, Head of Strategy at NEQSOL Holding</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/sinma-or-nga-yok-bay-area-development-deep-sea-port-project-ayeyarwady-region-myanmar" className="schedule-link">Sinma Deepwater Port</a>,Myanmar,<a href="https://www.gvip.io/expertise/1385" className="schedule-link">Mr. Thu Rein Aung, Chairman & CEO</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/aqaba-amman-water-desalination-conveyance-project-aawdc" className="schedule-link">Aqaba – Amman Water Desalination & Conveyance Project(AAWDC)</a>,Jordan,<a href="https://www.gvip.io/expertise/4089" className="schedule-link">Mr. Issa Al-wer</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>8:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/3212808570402491407">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Bom Dia Brasil - Top 5 Brazilian Projects Live!</h4>
                                <br/>
                                <p>Keynote:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Roberto Escoto, Manager, Investment Department, APEX</a></strong></p>
                                <br />
                                <p>Introduction:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Renan Marcondes Facchinatto, Partner, Dal Pozzo Advogados</a></strong></p>
                                <br/>
                                <p>Key Brazilian Federal and State Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/pampulha-airport-concession" className="schedule-link">Pampulha Airport Concession</a>, Brazil, <a href="#speakers" className="schedule-link">Mr. Fernando Marcatto, Secretary of Infrastructure</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/alcantara-port-terminal-tpa" className="schedule-link">Alcantara Port Terminal (TPA) </a>, Brazil, <a href="https://www.gvip.io/expertise/4183" className="schedule-link">Mr. Paulo Salvador, Executive Director</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/metropolitan-integrated-transit-system" className="schedule-link">Metropolitan Integrated Transit System, Florianopolis</a>,Brazil, <a href="https://www.gvip.io/expertise/4219" className="schedule-link">Mr. Ramiro Zinder, Executive Secretary for PPPs</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/metropolitan-train-lines-8-diamond-and-9-emerald" className="schedule-link">Metropolitan Train Lines 8 and 9, São Paulo</a>, Brazil, <a href="#speakers" className="schedule-link"> Ms. Gabriela Engler, Executive Secretary for Partnerships</a></strong></p>
                            </div>

                            <div className="col-md-2">
                            </div>

                            <div className="col-md-10">

                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>9:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/5124703160453846543">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Special Keynote - Key Actions to Drive Global Growth:</h4>
                                <p><strong><a href="#speakers" className="schedule-link">Andrew Robb, Former Minister of Trade and Investment, Government of Australia </a> </strong></p>
                                <br/>

                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>9:15 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/7976415209951380495">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Top North American Strategic Projects </h4>
                                <p>Projects that are critical to country growth</p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/great-lakes-basin-railroad" className="schedule-link">Great Lakes Transportation Basin, </a> United States, <a href="https://www.gvip.io/expertise/3959" className="schedule-link">Mr. Frank Patton, Chairman</a></strong>(United States)</p>
                                <p><strong><a href="https://www.gvip.io/projects/calcasieu-river-bridge-i-10-ppg-drive-us-90e" className="schedule-link">Calcasieu River Bridge</a>, United States, <a href="#speakers" className="schedule-link">Mr. Shawn Wilson, Secretary of the Louisiana Department of Transportation</a>
                                    </strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/the-mayan-train" className="schedule-link">Mayan Train</a>, Mexico, <a href="#speakers" className="schedule-link">Mr. Alejandro Vareia, Legal Director</a>
                                    </strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/jfk-airport-modernization" className="schedule-link">JFK Terminal One Redevelopment</a>, United States, <a href="https://www.gvip.io/expertise/2728" className="schedule-link">Mr. Amit Rikhy, President/CEO</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>10:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/5200987277189001999">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>"Innovation & Infrastructure - The Role of the Global CEO"</h4>
                                <br/>
                                <p>Keynote:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Andrés Gluski, CEO, AES Corporation</a></strong></p>
                                <br />
                                <p>Andrés Gluski has served as President and CEO since 2011, after serving as COO for five years. He has led AES through a dramatic transformation by focusing on simplification, risk improvement and innovation - including a $5 billion divestiture program, dramatically increased credit rating and the initiation of a quarterly dividend, which has grown at an 8% annual rate. Under his leadership, AES has become a world leader in implementing new clean technologies, including energy storage, wind, solar and LNG.</p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>10:30 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/7863703173476491279">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Owning & Operating Major Infrastructure Assets</h4>
                                <br/>
                                <p>Panelist:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Javier Perez Fortea, CEO, Globalvia</a></strong></p>
                                <br />
                                <p>Mr. Perez Fortea joined GLOBALVIA in 2011 and has been serving as Chief Executive Officer since 2013. Mr. Perez Fortea has been responsible for the financing, construction and operation of infrastructure projects in 14 countries in 3 different continents. He worked on a US $ 2.5 billion railroad PPP project in Manila (Philippines), in Indonesia he built a US $500 Million New Town in the rainforest of Irian Jaya with 3,500 local workers in only 18 months.</p>
                            </div>
                        </div>


                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>11:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/1575657746876738063">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Insight Discussion - The Global Economy, 2020 - 2023</h4>
                                <p>Given the 'fog of war' nature of the current global economy, this panel - made up of investors, operators and policymakers, critical thinkers all, will discuss the most likely scenarios for the next three years - and how they think about that 36 month period.</p>
                                <br/>
                                <p>Panelists:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/897" className="schedule-link">Santiago Castagnino, Managing Director and Partner, BCG</a> </strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Joaquim Levy, Chief Economist, Safra bank and former Minister of Finance, Brazil</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Jim Pass, Senior Managing Director, Guggenheim Partners</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>12:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/5540108549032415759">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>The Path Forward - U.S. Leadership and the Global Recovery</h4>
                                <br/>
                                <p>Special Policy Keynote:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Joseph Semsar, Deputy Under Secretary for International Trade, US Department of Commerce</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>12:30 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/6116202064452254223">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker" id="oracle-specific">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Special Strategic Keynote:</h4>
                                <p><strong><a href="#speakers" className="schedule-link">David H. Petraeus, Chairman, KKR Global Institute and Former Director, Central Intelligence Agency</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>12:50 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/6116202064452254223">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker" id="oracle-specific">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Strategic/oracle.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Project of the Year Awards (Sponsored By Oracle):</h4>
                                <p>Each year, we identify and select the best global projects from an initial list of as many as 250 projects across the globe. The next step is to have people worldwide vote on a long list, reducing the candidates from 5-3 projects - and finally our sponsors and Forum participants, the creme de la creme of infrastructure - choose the winners. This year the awards will be broadcasted, on GViP TV! </p>
                                <br/>
                                <p>Categories include:</p>
                                <p><strong>- Strategic Project of the Year</strong></p>
                                <p><strong>- Engineering Project of the Year</strong></p>
                                <p><strong>- Finance Project of the Year</strong></p>
                                <p><strong>- Sustainability/Green Project of the Year</strong></p>
                                <p><strong>- Job Creation Project of the Year</strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>1:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/236365722827130383">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>New Technologies Driving Real Opportunity for Improved Project Performance & Economic Growth:</h4>
                                <p>We bring people together to highlight new and visionary technology applications that will change our world - and that offer immediate opportunities to project developers, business executives and national policymakers.</p>
                                <br/>
                                <p>Panelists:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/4103" className="schedule-link">Jennifer Schmitz, Founder and CEO, Lattice Industries, Inc.</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/4048" className="schedule-link">Dev Amratia, Co-Founder & CEO, nPlan</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/3772" className="schedule-link">Tim Beck, Principal, Strategic Transportation Solutions, Oracle</a></strong></p>

                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>2:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/4109558159389078287">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Revitalizing Emerging Market Economies :</h4>
                                <br/>
                                <p>Thought Leaders:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Nicolas Firzli, Director General, World Pensions Council</a> </strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Fernando Marcatto, Infrastructure Secretary, State of Minas Gerais, Brazil</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Andrew Charlesworth, CEO, CAMG Infrastructure</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/4269" className="schedule-link">Mark Davis, Chief Infrastructure Officer, Alaska Industrial Development and Export Authority</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>3:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/8014368152319301903">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Bringing Supply Chains Home - The Case of Rare Earths and Specialty Metals</h4>
                                <p>Covid has highlighted the fact that many countries around the world have dangerously exported their ability to produce and/or make necessities strategic to their economic health. This includes PPE as well as medicines, and also includes data collection and analytics and - most critically - rare earth and specialty metals. This panel brings together critical rare earths and specialty metals actors focused on Niobium in the Americas.</p>
                                <br/>
                                <p>Special Case Study:</p>
                                <p><strong>The Niobium Elk Creek Project, Nebraska, United States, <a href="#speakers" className="schedule-link">Mr. Mark Smiti, CEO & Chairman</a></strong></p>
                                <br/>
                                <p>Panelists:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Sarah Ryker, Associate Director, Energy and Minerals, USGS</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Mark Smith, NioCorp Developments Ltd.</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Eric Jones, Managing Director, U.S. International Development Finance Corporation
                                        </a></strong></p>

                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>4:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/3767304378918302479">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>National Infrastructure Banks - Driving Economic Recovery:</h4>
                                <p>Infrastructure banks can focus and drive investment during a period of economic crisis, and so this panel looks at the priorities of such institutions, and how their capacity can be enhanced. Critical issues include funding for feasibility studies, crowding out private investment, and politicization. </p>
                                <br/>
                                <p>Panelists:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/4154" className="schedule-link">William T. Nolan, President, Infra-Bk, LLC</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/2072" className="schedule-link">Brian Ross, CEO, InfraShares </a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/2759" className="schedule-link">Pablo Pereira dos Santos, Special Advisor, Infrastructure, Inter-American Development Bank</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Kristie Pellecchia, Former Senior Advisor, Western Hemisphere US DFC</a></strong></p>
                            </div>
                        </div>
                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>5:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/2943721791202478351">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>The View from Space - Business Opportunities that will change Life on Earth</h4>
                                <p>The ability to see, measure and process data from space about the earth - minerals, public safety, agriculture - is going to transform how we live and work</p>
                                <br/>
                                <p>Moderator:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/28" className="schedule-link">Norman Anderson, CEO, CG/LA Infrastructure</a></strong></p>
                                <br/>
                                <p>Thought Leader Discussion:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Erlend Olsen, COO of Theia Group, Theia Satellite Network</a></strong>(United States)</p>
                                <p><strong><a href="#speakers" className="schedule-link">Dr. Joseph N. Pelton, Executive Board, International Association for the Advancement of Space Safety (IAASS)</a></strong></p>
                            </div>
                        </div>


                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>6:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/1339289135184329231">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Benefits Index Creation & First Annual Global Benefits Prize:</h4>
                                <p>The world needs a better way to think about infrastructure, and how to prioritize projects. Technology allows us to increasingly focus on users - and on the results of projects from the user perspective. This includes health, mobility, job creation, business creation and overall opportunity creation. A leading group of industry leaders will debate the creation of an overarching and inter-communicable Benefits Index across the different verticals in infrastructure. Additionally, forty-two projects, from all sectors, have entered this competition - after a discussion, the winners will be announced, predicated on the merit of the projects’ ability to effectively frame their benefits to the community and constituents.</p>
                                <br/>
                                <p>Discussion Leaders:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/3976" className="schedule-link">Mark Freedman, Managing Director, Dalberg</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Kiran Wilmot, Partner, Dalberg Advisors</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Prof. Dr.-Ing. Michael Bühler, Professor of Construction Business Management, University of Applied Science Konstanz (HTWG)</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/2759" className="schedule-link">Pablo Pereira dos Santos, Special Advisor, Infrastructure, Inter-American Development Bank</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Stephen Townsend, Network Engagement </a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/222" className="schedule-link">Anand Hemnani, Senior VP & Chief Investment Officer, CG/LA Infrastructure</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>7:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/7491702105916585231">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Real Opportunities, Bold Recovery - Action Items From Around the World:</h4>
                                <p>(Breakfast in Tokyo, Dinner in the U.S., and late Dinner in Madrid!)</p>
                                <br/>
                                <p>The wrap-up will focus on action items compiled from discussions throughout the day. The overall aim of this 13th Global Strategic Infrastructure Leadership Forum is swift and robust economic recovery. We believe that infrastructure is key, and so the recommendations will focus on that topic.</p>
                            </div>
                        </div>

                    </div>
                    {/* End Schdule Day 1 */}

                    {/* Start Track B */}
                    <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">
                        <h2>Track B: Projects</h2>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>9:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/3132086824738438927">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Top European Strategic Projects</h4>
                                <p>Projects that are critical to rejuvinating the region. </p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/new-central-polish-airport-cpk" className="schedule-link">Solidarity Transport Hub</a>, Poland, <a href="#speakers" className="schedule-link">Mr. Pzremyslaw Walendziak, Airport Planning and Capacity Manager</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/fehmarn-belt-fixed-link" className="schedule-link">Fehmarn Belt Fixed Link</a>, Denmark-Germany, <a href="#spekers" className="schedule-link">Mr. Kim Smedegaard Andersen, Deputy Technical Director</a></strong> </p>
                                <p><strong><a href="https://www.gvip.io/projects/west-africa-rail-network" className="schedule-link">Rail Baltica</a>, Estonia-Latvia-Lithuania, <a href="https://www.gvip.io/expertise/4375" className="schedule-link">Mr. Mark Loader, Chief Program Management Officer</a></strong></p>
                                <p><strong>Ankara-Niğde Highway, Turkey, <a href="#speakers" className="schedule-link">Ms. Tijen Siphai, CEO & CFO</a></strong></p>

                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>10:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/5743053106753019151">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Water/Wastewater:</h4>
                                <p>The water business is the great forgotten infrastructure, and one that is critical for realizing the benefits of infrastructure investment for the hardest hit members of the global community.</p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong>Vita Ambient Water Performance Contracts, Brazil, <a href="#speakers" className="schedule-link">Ms. Milene Aguiar, Engineer</a></strong></p>
                                <p><strong>Headworks Water and Sanitation Project, Peru, <a href="#speakers" className="schedule-link">Mr. Jorge Sulem, Project Manager</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/cadiz-valley-water" className="schedule-link">Cadiz Water Conveyance</a>, United States, <a href="https://www.gvip.io/expertise/3563" className="schedule-link">Ms. Courtney Degener, Vice President</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>11:00 AM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/3652574738606718479">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Transit Networks:</h4>
                                <p>Mobility is one of the key values for infrastructure investment, and we present some of the best global opportunities for infrastructure project development.</p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/concession-of-belo-horizontes-bus-terminal-tergip" className="schedule-link">Concession of Belo Horizonte's Bus Terminal</a>, Brazil, <a href="#speakers" className="schedule-link"> Mr. Fernando Marcatto, Secretary of Infrastructure, Government of Minas Gerais</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/lote-litoral-paulista-coastline-road-concession" className="schedule-link">Road Concession - State Coastline Lot A, São Paulo, </a>Brazil, <a href="#spekers" className="schedule-link">Ms. Gabriela Engler, Executive Secretary of Partnerships, Government of São Paulo</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/ontario-line-subway" className="schedule-link">Ontario Line Subway</a>, Canada, <a href="#spekers" className="schedule-link">Mr. Duncan Law, Head Sponsor, Subway Team</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/ferropista-en-la-linea-colombia" className="schedule-link">Ferropista Railway, </a>Colombia, <a href="https://www.gvip.io/expertise/4336" className="schedule-link">Mr. Alfonso Alba, Technical Director</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>1:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/8203683163901838095">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Highways, Bridges & Tunnels:</h4>
                                <p>The largest single category of infrastructure investment, these projects are transforming the productive capacity of countries worldwide, and have enormous potential to drive economic recovery.</p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/rodoanel-concession-program" className="schedule-link">Road Concessions Program, Rodoanel Concession Program, Minas Gerais</a>, Brazil, <a href="#speakers" className="schedule-link">Mr. Fernando Marcatto, Secretary of Infrastructure, Government of Minas Gerais</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/gordie-howe-international-bridge-detroit-mi-windsor-on" className="schedule-link">Gordie Howe International Bridge</a>, Canada, <a href="#speakers" className="schedule-link">Ms. Heather Grondin, Vice President of Communications and Stakeholder Relations</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/peripheral-ring-road" className="schedule-link">Peripheral Ring Road</a>, Peru, <a href="#speakers" className="schedule-link">Mr. Luis del Carpio, Project Manager</a></strong></p>
                                <p><strong>Aydin- Denizli and Nakkas-Basaksehir Highway Projects, Turkey, <a href="#speakers" className="schedule-link">Mr. Zeki Tekin, Investment Office of the Presidency of Turkey</a> </strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>2:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/2792052958244182543">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Smart & Sustainable Infrastructure:</h4>
                                <p>In fact, all infrastructure going forward will be ‘smart,’ and the opportunity now is to create a strategy for commercializing data to both securitize investments, and pay for new investments.</p>
                                <br/>
                                <p>Thought Leaders:</p>
                                <p><strong><a href="#speakers" className="schedule-link">Jeffrey DeCoux, Chairman, Autonomy Institute</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/4062" className="schedule-link">Michael J. Woods, CEO and COO, Big Sun Holdings Group Corporation</a></strong></p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/contra-costa-countywide-digital-infrastructure-project" className="schedule-link">ContraCosta Project</a>, United States, <a href="https://www.gvip.io/expertise/4103" className="schedule-link">Ms. Jennifer Schmitz, Founder and CEO, Lattice Industries, Inc.</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/ibirapuera-park-concession" className="schedule-link">Ibirapuera Park Concession & Zoo and Botanical Garden Project</a>, Brazil, <a href="#speakers" className="schedule-link"> Ms. Gabriela Engler, Executive Secretary for Partnerships, Government of the State of São Paulo </a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/the-clara-plan" className="schedule-link">Clara Project </a> - <a href="https://www.gvip.io/expertise/3816" className="schedule-link">Mike Day, Director, Clara Smart Cities</a></strong></p>
                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>3:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/7059104753526598671">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Ports:</h4>
                                <p>Leading Ports projects offer tremendous opportunities globally and are drivers of economic recovery and job creation.</p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong>Port of Tangier Med, Morocco, <a href="https://www.gvip.io/expertise/4337" className="schedule-link">Pr. Amine Laghidi, General Manager & International Expert</a> </strong></p>
                                <p><strong>Port Privatization Program, Guinea-Bissau, <a href="https://www.gvip.io/expertise/4046" className="schedule-link">Mr. Arthur Medel, Project Representative</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/hydroport-wales" className="schedule-link">HydroPort Wales</a>, United Kingdom, <a href="https://www.gvip.io/expertise/4100" className="schedule-link">Mr. James Sutcliffe, CEO & Founder</a></strong></p>

                            </div>
                        </div>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>4:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/3715240304320295695">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Energy:</h4>
                                <p>The pace of transformative energy projects is tremendous, from renewable energy, to storage, to new ‘behind the meter’ technologies.</p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong>Azito plant & Malindi PV Projects, Côte d’Ivoire and Kenya, <a href="https://www.gvip.io/expertise/2651" className="schedule-link">Mr. Jonathan Hoffman, Chief Development Officer</a></strong></p>
                                <p><strong>Tire Recycling Waste-to-Energy Plant, Brazil, <a href="#speakers" className="schedule-link">Mr. Luis Fernando Martinez, CEO</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/mauritania-hybrid-photovoltaic-power-plants" className="schedule-link">8 Hybrid Photovoltaic (PV) Power Plants</a>, Mauritania, <a href="#speakers" className="schedule-link">Dr. Hemmat Safwat</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/the-clara-plan" className="schedule-link">The CLARA Plan Hydrogen Project</a>, Australia, <a href="https://www.gvip.io/expertise/4378" className="schedule-link">Mr. Nick Cleary, Chairman & CEO</a></strong></p>
                                <p><strong>Transmission & Distribution System Concession, Puerto Rico, <a href="#speakers" className="schedule-link">Mr. Omar Marrero, Executive Director</a></strong></p>
                            </div>
                        </div>


                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>5:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/2511426804510236431">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Water and Wastewater - Reviving Investment in the Forgotten Infrastructure:</h4>
                                <p>The focus is on identifying investment targets and strategies for this critical sector, often overlooked - but always considered the #1 priority by voters around the world. We combine key practitioners with policymakers and developers.</p>
                                <br />
                                <p>Panelists: </p>
                                <p><strong><a href="#speakers" className="schedule-link">Mohsen Mortada, President and CEO, Cole Engineering Group</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Thiago Theo, Vita Ambiental, Brazil</a> </strong></p>
                                <p><strong><a href="https://www.gvip.io/expertise/3493" className="schedule-link">Antonino Ferrera, International CEO, ACEA </a></strong>(Rome)</p>
                                <p><strong><a href="#speakers" className="schedule-link">Travis Smith, Sr. Director Product Marketing, Sensus, Xylem</a></strong></p>
                            </div>
                        </div>


                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>6:00 PM EST</time>
                                <form method="GET" action="https://attendee.gotowebinar.com/register/2322370178160693007">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4>Rail:</h4>
                                <p>Some of the most exciting projects in the world are rail projects, driving critical connections between cities like São Paulo and Campinas, Dallas and Houston, and Tokyo and Kyoto. </p>
                                <br/>
                                <p>Project Presentations:</p>
                                <p><strong><a href="https://www.gvip.io/projects/intercity-train-tic" className="schedule-link">São Paulo Intercity Trains project</a>, Brazil, <a href="#speakers" className="schedule-link">Ms. Gabriela Engler, Executive Secretary for Partnerships, Government of São Paulo</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/fiol-i-west-east-integration-railway-part-one" className="schedule-link">FIOL & FICO Railways</a>, Brazil, <a href="#speakres" className="schedule-link">Mr. Ramon Silva, Project Manager</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/northeast-maglev-project" className="schedule-link">The Northeast Maglev</a>, United States, <a href="https://www.gvip.io/expertise/4297" className="schedule-link">Mr. Ian Rainey, Senior Vice President</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/serra-gacha-regional-train" className="schedule-link">Serra Gaúcha Regional Commuter Train</a>, Brazil, <a href="https://www.gvip.io/expertise/488" className="schedule-link">Mr. Arnildo Shildt, Project Director</a></strong></p>
                                <p><strong><a href="https://www.gvip.io/projects/serra-gaucha-regional-airport" className="schedule-link">Serra Gaúcha Regional Airport</a>, Brazil,<a href="#speakers" className="schedule-link">Mr. Rogério Rodrigues, Executive Director</a></strong></p>
                            </div>
                        </div>
                    </div>
                    {/* End Schedule Track B*/}

                    {/* Start Track C */}
                    <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">
                        <h2>Track C: Strategic Workshops</h2>

                        <div className="row schedule-item">
                            <div className="col-md-2">
                                <time>5:00 PM EST</time>
                                <form method="GET" action="https://www.gotomeet.me/michelle682">
                                    <div className="form-row">
                                        <div className="col-auto">
                                            <button type="submit">Join Session</button>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                                <div className="speaker">
                                    <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/Agenda/CGLA_newlogo.jpg" alt="Norman Anderson"/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <h4> US Deal Team Discussion:</h4>
                                <br/>
                                <p> Thought Leaders:</p>
                                <p><strong><a href="https://www.gvip.io/expertise/1774" className="schedule-link">Craig O'Connor, Director, Office of Renewable Energy, Export-Import Bank of the United States</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Paul Alvaro Marin, Director, Public Affairs (Acting), U.S. Trade and Development Agency</a></strong></p>
                                <p><strong><a href="#speakers" className="schedule-link">Garrett Marquis, Vice President, Office of Strategic Initiatives, U.S. International Development Finance Corporation</a></strong></p>

                            </div>
                        </div>

                        {/* End of Track C*/}

                    </div>



                </div>

            </div>
        
        </section> //End Schedule Section
  )
}

export default Schedule;