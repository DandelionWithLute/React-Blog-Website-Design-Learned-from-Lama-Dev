import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src='https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'
        alt=''
        />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="">
                <i className="fas fas=plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea 
                placeholder="Tell your story..." 
                type='text'
                className="writeInput writeText">
                </textarea>
                <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  )
}
