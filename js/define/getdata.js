define(['jquery','filldata'],function($,filldata){
    var getdata = function(){
        $.getJSON("../../data/data.json", function(data){
            var datas = data.employees;
            console.log(datas);
            return datas;
        });
        console.log('---===getdataq===---');
        filldata.fill();
        console.log('---===getdata===---');
    };
    return getdata;
});
