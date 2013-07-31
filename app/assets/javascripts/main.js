angular.module('FantasyInsiders.resources', ['ngResource']);
angular.module('FantasyInsiders.services', ['ngResource']);
angular.module('FantasyInsiders.directives', []);
angular.module('FantasyInsiders.filters', []);
angular.module('FantasyInsiders.controllers', ['ngCookies']);

var FantasyInsiders = angular.module("FantasyInsiders", ['FantasyInsiders.resources', 'FantasyInsiders.services', 'FantasyInsiders.directives', 'FantasyInsiders.filters', 'FantasyInsiders.controllers', 'ui.compat', '$strap.directives', 'templates']);
