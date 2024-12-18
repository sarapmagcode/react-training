import profilePic from './assets/profile.jpg';

const Card = () => {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="user profile" />
            <h2 className="card-title">Jason</h2>
            <p className="card-text">I am currently building a startup</p>
        </div>
    );
};

export default Card;