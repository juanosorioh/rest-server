const ctrlUsers =  {}

ctrlUsers.getUsers = (req, res)=>{
    res.send('peticion Get')
}
ctrlUsers.postUsers = (req, res)=>{
    res.send('peticion Post')
}
ctrlUsers.putUsers = (req, res)=>{
    res.send('peticion Put')
}
ctrlUsers.deleteUsers = (req, res)=>{
    res.send('peticion Delete')
}

module.exports = ctrlUsers;