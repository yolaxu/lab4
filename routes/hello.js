
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToShow = req.params.userName;
  res.render('Hello', {
  	'name': 'nameToShow',
  });
};
