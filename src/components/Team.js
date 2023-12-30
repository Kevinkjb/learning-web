

const Team = ({teams}) =>{
    return(
        <>
        <main className="team--section">
            <section className="team--content">
                <img className='team--image' src={teams.imgURL} alt="team_image"/>
                <div className="teams--info">
                    <h3 className="team--names">{teams.teamName}</h3>
                    <p className="team--title">{teams.jobTitle}</p>
                </div>
            </section>
        </main>

        </>
    )
}

export default Team