import React, { Component } from 'react';
import Identicon from 'identicon.js';
import Sidebar from './Sidebar';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5">

        <div className="row">
          <div className='col-lg-4'>
            <Sidebar account={this.props.account} />
          </div>
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px', }}>
            <div className="content my-auto" >
              <p>&nbsp;</p>
              <h2 className='text-center'>Share Image</h2>
              {/* <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                <div className="form-group mr-sm-2">
                  <br></br>
                  <input
                    id="imageDescription"
                    type="text"
                    ref={(input) => { this.imageDescription = input }}
                    className="form-control"
                    placeholder="Image description..."
                    required />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
              </form> */}
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }}>
                <label htmlFor="fileInput">Choose an image file:</label>
                <div className="custom-file mb-3">
                  <input type="file" className="custom-file-input" id="fileInput" accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                  <label className="custom-file-label" htmlFor="fileInput">Upload</label>
                </div>
                <div className="form-group mb-3">
                  <input id="imageDescription" type="text" ref={(input) => { this.imageDescription = input }} className="form-control" placeholder="Describe your image in a few words" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Share your image!</button>
              </form>
              <p>&nbsp;</p>
              {this.props.images.map((image, key) => {
                return (
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        {/* <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px'}}/></p> */}
                        <p className="text-center"><img src={`https://cloudflare-ipfs.com/ipfs/${image.hash}`} style={{ maxWidth: '420px' }} /></p>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
