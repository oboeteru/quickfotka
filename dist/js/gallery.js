var app = angular.module('plunker', ['ui.bootstrap']);


var CmGalleries = function ($scope) {
	$scope.cmgalleries = [
	{'gallery_name' : "ślub", 'link': 'test1', 'images' : ["dist/img/gallery/g (1).png", "dist/img/gallery/g (2).png", "dist/img/gallery/g (3).png", "dist/img/gallery/g (4).png", "dist/img/gallery/g (5).png", "dist/img/gallery/g (6).png", "dist/img/gallery/g (7).png", "dist/img/gallery/g (8).png", "dist/img/gallery/g (9).png", "dist/img/gallery/g (10).png"]},
	{'gallery_name' : "wieczór kawalerski", 'link': 'test2', 'images' : ["dist/img/gallery/g (11).png", "dist/img/gallery/g (12).png", "dist/img/gallery/g (13).png", "dist/img/gallery/g (14).png", "dist/img/gallery/g (15).png", "dist/img/gallery/g (16).png", "dist/img/gallery/g (17).png", "dist/img/gallery/g (18).png", "dist/img/gallery/g (19).png", "dist/img/gallery/g (20).png"]},
	{'gallery_name' : "ostra impra", 'link': '#', 'images' : ["dist/img/gallery/g (21).png", "dist/img/gallery/g (22).png", "dist/img/gallery/g (23).png", "dist/img/gallery/g (24).png", "dist/img/gallery/g (25).png", "dist/img/gallery/g (26).png", "dist/img/gallery/g (27).png", "dist/img/gallery/g (28).png", "dist/img/gallery/g (29).png", "dist/img/gallery/g (30).png"]},
	{'gallery_name' : "sesja zdjęciowa", 'link': '#', 'images' : ["dist/img/gallery/g (31).png", "dist/img/gallery/g (32).png", "dist/img/gallery/g (33).png", "dist/img/gallery/g (34).png", "dist/img/gallery/g (35).png", "dist/img/gallery/g (36).png", "dist/img/gallery/g (37).png", "dist/img/gallery/g (38).png", "dist/img/gallery/g (39).png", "dist/img/gallery/g (40).png"]},
	];
};

app.directive('galleries', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="galleries" class="row"></div>',
        link: function(scope) {
			scope.galleries = 'singlegallery.html';
		}
	};
});