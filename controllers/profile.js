const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({
        id: id
    }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('não encontrado')
        }
    })
        .catch(err => res.status(400).json('erro em receber usuario'))

}

module.exports = {
    handleProfileGet: handleProfileGet
}