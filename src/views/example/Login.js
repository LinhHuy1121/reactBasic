// import React, { Component } from 'react';

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };
//     }

//     handleInputChange = (event) => {
//         const target = event.target;
//         const name = target.name;
//         const value = target.value;

//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // Đây là nơi xử lý việc đăng nhập, bạn có thể gửi các thông tin đăng nhập (username, password) đến máy chủ hoặc xử lý một cách khác
//         const { username, password } = this.state;
//         console.log("Username:", username);
//         console.log("Password:", password);
//         // Thêm các logic xử lý đăng nhập ở đây
//     }

//     render() {
//         return (
//             <div className='login-container'>
//                 <h2>Login</h2>
//                 <form onSubmit={this.handleSubmit} className='login-form'>
//                     <div>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={this.state.username}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={this.state.password}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Login;
