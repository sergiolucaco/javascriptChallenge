$(document).ready(function (){
	var $videoTitle = $('.videoTitle');
	var $thumbnail = $('.showingThumbnail');
	var $videoLink = $('.videoLink');

	$('.getData').on('click',function(){
		$.ajax({
			url : 'Materials/youtube.json',
			dataType : 'json'
		}).done(function(youtubeData){
			var $youtubeTitle = youtubeData.data.items[0].title;
			var $youtubeThumbnail = youtubeData.data.items[0].thumbnail.hqDefault;
			var $youtubeLink = youtubeData.data.items[0].player.default;

			$videoTitle.text($youtubeTitle);
			$thumbnail.attr('src', $youtubeThumbnail);
			$videoLink.attr({
				'href' : $youtubeLink,
				'target' : '_blank'
			});


		})

	})

});