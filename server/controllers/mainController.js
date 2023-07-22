exports.homepage = async (req, res) => {
    const locals = {
        title: 'NodeJs Notes',
        description: 'Free NodeJS Notes app.'
    }
    res.render('index', locals)
}
exports.about = async (req, res) => {
    const locals = {
        title: ' Abouts NodeJs Notes',
        description: 'Free NodeJS Notes app.'
    }
    res.render('about', {
        locals,
        layout: '../views/layouts/front-page'
    })
}