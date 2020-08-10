import React from 'react';

  function getUser() {
    return Promise.resolve({ id: '1', name: 'ReactJs' });
  }
  
  type UserProp ={
    id: string;
    name: string;
  }

  function User() {
    const [user, setUser] = React.useState<UserProp>();
   
    React.useEffect(() => {
      const loadUser = async () => {
        const user = await getUser();
        setUser(user);
      };
   
      loadUser();
    }, []);
      
    return (
      <div>
        {user ? <p>Welcome user: {user.name}</p> : null}  
      </div>
    );
  }

  type SearchProps={
    value:string,
    onChange:any,
    children:any
  }
  export default User;