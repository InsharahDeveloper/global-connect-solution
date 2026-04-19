import "../../App.css"

function Flip_Emoji(e) {
  const emoji = e.emoji
  const left_space = e.className
  return (
    <>
    <div id="main_con" className={left_space}>
        <div className="front">{emoji}</div>
        <div className="back">{emoji}</div>

    </div>
    </>
  )
}

export default Flip_Emoji