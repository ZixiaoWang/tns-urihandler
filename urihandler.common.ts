export interface SchemeObject{
    url: string,
    scheme: string,
    path: string,
    fragment: string,
    query: string,
    host: string,
    user?: string,
    password?: string
}

/**
 * Class URIHandler
 * The class can be injected into Angular class
 * @module SchemeHandler
 * @example
 * import { URIHandler } from 'tns-ng-urihandler';
 * 
 * export class myApp{
 *  constructor(private urihandler: URIHandler){
 *      console.log(this.uriHandler.getUrl());
 *  }
 * }
 */
export class _URIHandler{

    public url: string;
    public scheme: string;
    public path: string;
    public query: string;
    public fragment: string;
    public host: string;
    public user: string;
    public password: string;

    private _getSearch(query: string){
        if(query === null || query.length == 0){
            return {};
        }
        let _queries = query.split('&');
        let search = {};
        _queries.forEach(q=>{
            let _qs = q.split('=');
            search[_qs[0]] = _qs[1] ? _qs[1] : null
        }) 
        return search;
    }

    /**
     * @function getUrl
     * @return {string} Full url path
     */
    getUrl(): string{
        return this.url;
    }

    /**
     * @function getFragment
     * @return {string} the fragment of uri if there's any
     * @example 
     * myapp://host:8080/path/to/my/directory#home-page // return "home-page"
     */
    getFragment(): string{
        return this.fragment;
    }

    /**
     * @function getScheme
     * @return {string} the scheme of uri
     * @example
     * myapp://host:8080/path/to/my/directory // return "myapp"
     */
    getScheme(): string{
        return this.scheme;
    }

    /**
     * @function getQuery
     * @return {string} the queries of uri
     * @example
     * myapp://host:8080/path/to/my/directory?name=Bob // return "name=Bob"
     */
    getQuery(): string{
        return this.query;
    }

    /**
     * @function getPath
     * @return {string} the path of uri
     * @example
     * myapp://host:8080/path/to/my/directory?name=Bob // return "path/to/my/directory"
     */
    getPath(): string{
        return this.path;
    }

    /**
     * @function getHost
     * @return {string} the host of uri
     * @example
     * myapp://host:8080/path/to/my/directory?name=Bob // return "host"
     */
    getHost(): string{
        return this.host;
    }

    /**
     * @function getUser
     * @return {string} the user info of uri if any
     * @example
     * myapp://Alice@host:8080/path/to/my/directory?name=Bob // return "Alice"
     */
    getUser(): string{
        return this.user;
    }

    /**
     * @function getPassword
     * @return {string} the password of uri if any
     * @example
     * myapp://Alice:Passw0rd@host:8080/path/to/my/directory?name=Bob // return "Passw0rd"
     */
    getPassword(): string{
        return this.password;
    }

    search(): any{
        return this._getSearch( this.query );
    }
}