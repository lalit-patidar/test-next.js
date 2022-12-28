import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
   message: string,
   body: {
    userName: string,
    email: string,
    token: string,
    role: string,
   }
};

let mocUserData = [{
    userName: "john doe",
    email: "john.doe@gmail.com",
    password: "john@123",
    token: [],
    role: 'user'
}, {
    userName: "peter thill",
    email: "peter.thill@gmail.com",
    password: "peter@123",
    token: [],
    role: 'user'
}, {
    userName: "steav jobs",
    email: "steav.jobs@gmail.com",
    password: "steav@123",
    token: [],
    role: 'user'
}, {
    userName: "Elon musk",
    email: "Elon.musk@gmail.com",
    password: "Elon@123",
    token: [],
    role: 'user'
}]


export default function handler<NextApiHandler>(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if(req.method === 'GET') { return res.status(405)};
    
     let user = mocUserData.find(user => user?.email === req.body.email && user.password === req.body.password);
     let userAuthToken = "jcsdcjcnjd" + (Math.floor(Math.random()*10000)) + "xy-sddvfd-nn";
     let userAuth = mocUserData.map(mocUser => {
          if(mocUser?.email === user?.email) {
            return {...mocUser, token: mocUser.token.concat(userAuthToken)}
          } else { return mocUser}
     });

     mocUserData = userAuth;
     delete user?.token;
     
    res.status(200).json({message: "login successful", body: {...user, token: userAuthToken}})
}
