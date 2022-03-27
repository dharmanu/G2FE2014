const Card = ({images, title, artists}) => {
    return(
        <div className="App">
      <img src={images}></img>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="nama-artis">
        <h2>{artists}</h2>
      </div>
      <div className="select">
        <select>
          <option>Pilih Lagu</option>
        </select>
        
      </div>
    </div>
    )
}
export default Card