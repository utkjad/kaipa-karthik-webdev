(function () {
    angular
        .module('WebAppMaker')
        .controller('FlickrImageSearchController', FlickrImageSearchController);
    
    function FlickrImageSearchController($location, $routeParams, FlickrService, WidgetService) {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.pageId = $routeParams["pid"];
        vm.widgetId = $routeParams["wgid"];
        vm.back = back;
        vm.searchFlickr = searchFlickr;
        vm.selectPhoto = selectPhoto;
        vm.profile = profile;
        vm.clear = clear;

        function back() {
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.widgetId);
        }

        function searchFlickr(searchText) {
            FlickrService
                .searchPhotos(searchText)
                .then(function (response) {
                    var data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
                }, function (error) {
                    vm.alert = "Unable to search Flickr";
                });
        }
        
        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            var widget = {
                url: url
            };
            WidgetService
                .updateWidget(vm.widgetId, widget)
                .then(back, function () {
                    vm.alert = "Flickr image could not be saved for use. Try again later.";
                });
        }

        function profile() {
            $location.url("/user/" + vm.userId);
        }

        function clear() {
            vm.alert = "";
        }
    }
})();