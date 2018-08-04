const handleSignin = (req, res, db, bcrypt) => {
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then(user => {
                        res.json(user[0])
                    })
                    .catch(err => res.status(400).json('indisponivel para receber'))
            } else {
                res.status(400).json('erro senha ou email errados')
            }
        })
        .catch(err => res.status(400).json('dados errados'))
}
module.exports = {
    handleSignin: handleSignin
}