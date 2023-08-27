const Preview = (probs) => {
    const info = probs.info;
    return (  
        <div className="preview">
            <div className="left-part">
                <h2>EDUCATION</h2>
                <hr/>
                <div className="degree">
                    <h3>info.degree</h3>
                    <p>info.college</p>
                    <p>info.grad-date</p>
                </div>
                <h2>LICENECES</h2>
                <hr/>
                <div className="degree">
                    <h3>info.licence</h3>
                    <p>info.licence-field</p>
                </div>
                <div className="contacts">
                    <div className="contact">
                        <div className="mark"></div>
                        <div className="type">Phone</div>
                    </div>
                    <p>info.phone</p>
                    <div className="contact">
                        <div className="mark"></div>
                        <div className="type">Phone</div>
                    </div>
                    <p>info.phone</p>
                    <div className="contact">
                        <div className="mark"></div>
                        <div className="type">Phone</div>
                    </div>
                    <p>info.phone</p>
                    <div className="contact">
                        <div className="mark"></div>
                        <div className="type">Phone</div>
                    </div>
                    <p>info.phone</p>
                </div>
            </div>
            <div className="right-part">

            </div>
        </div>
    );
}
 
export default Preview;