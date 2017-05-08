"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class URIHandler
 * The class can be injected into Angular class
 * @module SchemeHandler
 * @example
 * import { URIHandler } from 'tns-ng-urihandler';
 *
 * export class myApp{
 *  constructor(private urihandler: URIHandler){
 *      console.log(this.uriHandler.getURI());
 *  }
 * }
 */
var _URIHandler = (function () {
    function _URIHandler() {
    }
    _URIHandler.prototype._getSearch = function (query) {
        if (query === null || query.length == 0) {
            return {};
        }
        var _queries = query.split('&');
        var search = {};
        _queries.forEach(function (q) {
            var _qs = q.split('=');
            search[_qs[0]] = _qs[1] ? _qs[1] : null;
        });
        return search;
    };
    /**
     * @function getURI
     * @return {string} Full uri path
     */
    _URIHandler.prototype.getURI = function () {
        return this.uri;
    };
    /**
     * @function getFragment
     * @return {string} the fragment of uri if there's any
     * @example
     * myapp://host:8080/path/to/my/directory#home-page // return "home-page"
     */
    _URIHandler.prototype.getFragment = function () {
        return this.fragment;
    };
    /**
     * @function getScheme
     * @return {string} the scheme of uri
     * @example
     * myapp://host:8080/path/to/my/directory // return "myapp"
     */
    _URIHandler.prototype.getScheme = function () {
        return this.scheme;
    };
    /**
     * @function getQuery
     * @return {string} the queries of uri
     * @example
     * myapp://host:8080/path/to/my/directory?name=Bob // return "name=Bob"
     */
    _URIHandler.prototype.getQuery = function () {
        return this.query;
    };
    /**
     * @function getPath
     * @return {string} the path of uri
     * @example
     * myapp://host:8080/path/to/my/directory?name=Bob // return "path/to/my/directory"
     */
    _URIHandler.prototype.getPath = function () {
        return this.path;
    };
    /**
     * @function getHost
     * @return {string} the host of uri
     * @example
     * myapp://host:8080/path/to/my/directory?name=Bob // return "host"
     */
    _URIHandler.prototype.getHost = function () {
        return this.host;
    };
    /**
     * @function getUser
     * @return {string} the user info of uri if any
     * @example
     * myapp://Alice@host:8080/path/to/my/directory?name=Bob // return "Alice"
     */
    _URIHandler.prototype.getUser = function () {
        return this.user;
    };
    /**
     * @function getPassword
     * @return {string} the password of uri if any
     * @example
     * myapp://Alice:Passw0rd@host:8080/path/to/my/directory?name=Bob // return "Passw0rd"
     */
    _URIHandler.prototype.getPassword = function () {
        return this.password;
    };
    _URIHandler.prototype.search = function () {
        return this._getSearch(this.query);
    };
    return _URIHandler;
}());
exports._URIHandler = _URIHandler;
