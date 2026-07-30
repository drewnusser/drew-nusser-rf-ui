import './Attendees.scss';
import PersonPortal from '../../../../src/assets/PersonPortal.png'
import Arrow from '../../../../src/assets/Arrow.png'
import Add from '../../../../src/assets/Add.png'
import Laptop from '../../../../src/assets/Laptop.png'

 const Attendees = () => {
    return (
        <div className="attendees-page">
            <div className="attendees-header">
                <h2>Event setup guide</h2>
                <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
            </div>
            <div className="attendees-cap">
                <div><img src={PersonPortal} alt="Attendees Cap" /></div>
                <h2>Attendee</h2>
            </div>
            <div className="attendees-modules">
                <div className="attendees-module">
                    <div className="attendees-module-title">
                        <strong>Step 1: </strong>Base settings.
                    </div>
                    <div className="attendees-module-body-container">
                        <div className="attendees-module-body full-width">
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title">General</strong>
                                <div className="attendees-module-item-description">Define Attendee types &amp; attributes</div>
                            </a>
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title">Title</strong>
                                <div className="attendees-module-item-description">Description that explains the value goes here. Description that explains the value goes here.</div>
                            </a>
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title">Title</strong>
                                <div className="attendees-module-item-description">Description that explains the value goes here. Description that explains the value goes here.</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="attendees-module">
                    <div className="attendees-module-title">
                        <strong>Step 2: </strong>Build regisration workflows.
                    </div>
                    <div className="attendees-module-body-container">
                        <div className="attendees-module-body">
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title"><img src={Arrow} alt="Attendee Registration" /> Attendee Registration</strong>
                                <div className="attendees-module-item-description">Start by creating a general registration workflow</div>
                            </a>
                        </div>
                        <div className="attendees-module-body">
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title"><img src={Arrow} alt="Attendee Registration" /> Attendee Registration</strong>
                                <div className="attendees-module-item-description">Start by creating a general registration workflow</div>
                            </a>
                        </div>
                        <div className="attendees-module-body">
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title"><img src={Arrow} alt="General" /> General</strong>
                                <div className="attendees-module-item-description">Start by creating a general registration workflow</div>
                            </a>
                        </div>
                        <div className="attendees-module-body center">
                            <a href="#" className="attendees-module-item">
                                <img src={Add} alt="Add Registration Workflow" />
                                <div className="attendees-module-item-description">Add Registration Workflow</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="attendees-module">
                    <div className="attendees-module-title">
                        <strong>Step 3: </strong>Design post-registration experiences.
                    </div>
                    <div className="attendees-module-body-container">
                        <div className="attendees-module-body">
                            <a href="#" className="attendees-module-item">
                                <strong className="attendees-module-item-title"><img src={Laptop} alt="Attendee Portal" /> Attendee Portal</strong>
                                <div className="attendees-module-item-description">Manage the portal that attendees will see after they've registered for your event.</div>
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attendees