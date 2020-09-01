$(function() {
	$(document).ajaxStart(function() {
		$('#loading').show();
	});

	// 监听到 Ajax 完成的事件
	$(document).ajaxStop(function() {
		$('#loading').hide();
	});
	$('ul li').on('click', function() {
		var index = $(this).index() + 2;
		console.log(index);
		newsList(index);
	});
	function newsList(index) {
		$.ajax({
			url: 'https://photo.sina.cn/aj/index?cate=recommend&page=' + index + '&',
			dataType: 'jsonp',
			success: function(res) {
				console.log(res.data);
				//template使用 1.导入文件 2定义数据 3定义模板
				var str = template('tpl-news', res);
				$('#row2').html(str);
			}
		});
	}
	newsList(10);
});
