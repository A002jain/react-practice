const SolutionEditor = ({handleClick})=>{
  return (
    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Solution</label>
        <textarea className="form-control c-dark" id="exampleFormControlTextarea1" rows="10"
        onChange = {handleClick}></textarea>
    </div>  
  );
}

const Category = ({handleClick})=>{
  return(
      <div className="form-group col-md-5 col-sm">
          <label htmlFor="exampleInputEmail1">Category</label>
          <input type="text" className="form-control c-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tags"
          onChange = {handleClick}/>
      </div>
    )
  }

const ProblemInput = ({handleClick})=>{
return(
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Problem Statement</label>
        <input type="text" className="form-control c-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Problem Statement"
        onChange = {handleClick}/>
        <small id="emailHelp" className="form-text text-muted">input problem statement format avc-avc-avc</small>
    </div>
  )
}

const FileTypeInput = ({handleClick})=>{
  const fileTypes = ['txt', 'json', 'yaml', 'csv'];
  return(
      <div className="form-group col-5 ">
        <label htmlFor="inputState">File Type</label>
        <select id="inputState " className="form-control c-dark " 
        onChange = {handleClick}>
        {fileTypes.map((fileType, key) => <option>{fileType}</option>)}
        </select>
      </div>
  )
}
export { SolutionEditor, ProblemInput ,FileTypeInput, Category};
