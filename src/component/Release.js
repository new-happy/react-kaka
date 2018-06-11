import React,{ Component } from 'react'
import '../css/release.css'
import { Upload, Icon, Modal } from 'antd';
import imgDz from '../images/654.png'
import Footer from './Footer'
import styled from 'styled-components'


class Release extends Component {
  state = {
   previewVisible: false,
   value:'',
   previewImage: '',
   fileList: [{
     uid: -1,
     name: 'xxx.png',
     status: 'done',
     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
   }]
 }
 handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })
  handleChanged = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render () {
    const num = this.state.value.length
    console.log(num);
    
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
     <div>
       <Icon type="plus" />
     </div>
   );
   return (
     <div className="release">
       <header>
         <span>取消</span>
         <span>发布需求</span>
         <span></span>
       </header>
       <div className="release-main">
         <textarea value={this.state.value}
         onChange={this.handleChanged}
         placeholder='请详细描述您所需要发布帮助的具体内容，以便接受任务者更明确的回答您所发布的要求......'>
         </textarea>
         <p>{num}/200</p>
       </div>
       <div className="release-set">
         <Upload
         action="//jsonplaceholder.typicode.com/posts/"
         listType="picture-card"
         onPreview={this.handlePreview}
         onChange={this.handleChange}
       >
         {fileList.length >= 3 ? null : uploadButton}
       </Upload>
       <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
         <img alt="example" style={{ width: '100%' }} src={previewImage} />
       </Modal>
       <span>添加图片、视频</span>
       </div>
       <p><img src={imgDz} alt="1" />武汉市武昌区</p>
       <Integral className='release-integral'>
         <h2>积分</h2>
         <span>积分余额: 260</span>
       </Integral>
       <Submit>
          <h5>*本次发布费用为50积分</h5>
          <button className='submit'>发布</button>
          <p><span>发布即表示同意</span>《随想咔咔服务发布规范》</p>
       </Submit>
       <Footer />
     </div>
   )
  }
}

export default Release

const Integral = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  span {
    font-size:1.5em;
    line-height: 1.5em;
  }
`
const Submit = styled.div`
  width:80%;
  margin:0 auto;
  text-align:center;
  h5{
    color:red;
  }
  span{
    color:#ccc;
  }
`
