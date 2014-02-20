var fs = require('fs'),
    json = require('./category.json');


// [transformation]category -> tree
var forTree = {
  name: "電話帳",
  children: []
};

var tmp = {};

json['response']['docs'].forEach(function(v){
  if (!v.parent && tmp[v.category_code]) {
    // 親は居ないけど、既に登録されていた場合
	tmp[v.category_code].name = v.category_name;
  
  } else if (!v.parent) {
    // 親も居ないし、まだ登録されていない
	tmp[v.category_code] = {
	  name: v.category_name,
	  children: []
	}
  
  } else {
    // まだ登録されていなければ追加する
	if (!tmp[v.parent]) tmp[v.parent] = { name: null, children: [] };
    tmp[v.parent].children.push({ name: v.category_name });
  }
});

Object.keys(tmp).forEach(function(key){
  forTree.children.push(tmp[key]);
});

//console.log(forTree);


fs.writeFile('test.json', JSON.stringify(forTree), 'utf-8', function (err) {
  console.log('[ERR]', err);
});

