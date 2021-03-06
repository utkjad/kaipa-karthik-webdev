(function () {
    angular
        .module('WebAppMaker')
        .factory('WidgetService', WidgetService);

    function WidgetService($http) {

        var urlPage = "/api/page/";
        var urlWidget = "/api/widget/";

        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            reorderWidget: reorderWidget,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(pageId, widget) {
            return $http.post(urlPage + pageId + "/widget", widget);
        }

        function findWidgetsByPageId(pageId) {
            return $http.get(urlPage + pageId + "/widget");
        }
        
        function reorderWidget(pageId, start, end) {
            return $http.put(urlPage + pageId + "/widget?start=" + start + "&end=" + end);
        }

        function findWidgetById(widgetId) {
            return $http.get(urlWidget + widgetId);
        }

        function updateWidget(widgetId, widget) {
            return $http.put(urlWidget + widgetId, widget);
        }

        function deleteWidget(widgetId) {
            return $http.delete(urlWidget + widgetId);
        }

    }
})();