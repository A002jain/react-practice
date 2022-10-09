// import F1 from  "./phto/a.jpg"
// import F2 from  "./phto/b.jpg"

const FamilyTree = () => {

  return (
      <div className="family-tree-container">
        <div className="family-tree-container2">
        <li className="grid-container">
          <div className="todo-container">
            <ul>
              <label>Family 1</label>
              <div className="passbook-element">
                <div className="image-container">
                  <img src=".\phto\a.jpg" alt="Logo" />
                </div>
                <div className="contact-data">
                  <label>Name = Troll King</label>
                  <label>Phone NO. = 88888888</label>
                  <label>City = Monster</label>
                </div>
              </div>
            </ul>
            <ul>
              <label>Family 2</label>
              <div className="passbook-element">
                <div className="image-container">
                  <img src=".\phto\b.jpg" alt="Logo" />
                </div>
                <div className="contact-data">
                  <label>Name = RK Jain</label>
                  <label>Phone NO. = 9828950328</label>
                  <label>City = Chirawa</label>
                </div>
              </div>
              </ul>
          </div>
        </li>
        </div>
      </div>
  );
}

export default FamilyTree;
