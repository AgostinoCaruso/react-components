
function Card({ lolDB }) {
    return (
        lolDB.map((ele) =>
            <div key={ele.id} className="card myCard my-5">
                <img className="card-img-top" src={ele.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.description}</p>
                    <a href="#" className="btn btn-primary">Cliccami</a>
                </div>
            </div>
        )
    )
}

export default Card;