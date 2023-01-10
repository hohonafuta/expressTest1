
//http://127.0.0.1:3000/users/sound?q=dog

function sound(req,res,id) {

    console.log( req.query); 
    const { q } = req.query
    console.log('requiest query : ' + q);


    if (q == "dog"){
        res.json({sound:'멍멍'})
    } else if ( q == "cat"){
        res.json({sound:'야옹'})
    } else {
        res.json({sound:'알수 없음'})
    }

    console.log('sound request received.');


}

exports.sound = sound;