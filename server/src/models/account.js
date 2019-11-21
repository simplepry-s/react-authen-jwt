const Login = data => {
  return `
    select * 
    from accounts 
    where username ='${data.username}' and password='${data.password}'
    `;
};

export default { Login };
