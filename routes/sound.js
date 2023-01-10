
function sound(res,id) {
    console.log('sound request received.');
   
    res.render('sound', { title: 'Express' });
}

exports.sound = sound;