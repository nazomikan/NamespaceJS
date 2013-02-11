NamespaceJS
============

this library provide namespace. it is all. very simple!

[![build status](https://secure.travis-ci.org/nazomikan/NamespaceJS.png)](http://travis-ci.org/nazomikan/NamespaceJS)

## Usage

In browser include single javascript file.

    <script type="text/javascript" src="namespace.js"></script>

On server install NamespaceJS via npm first:

    npm install namespacejs

and then include it in your project with:

    var Namespace = require('namespacejs');

##Example Usage

###Namespace#means
`means` exports object to namespace.
For example, object export to "aaa.bbb.ccc" can be written using NamespaceJS as follows.

    (function () {
        var obj = {a: 1};
        Namespace.create('aaa.bbb.ccc').means(obj);

        assert(aaa.bbb.ccc, obj); // true
    }());

if you want to export under the local namespace as follow

    (function () {
        var local = {}, obj = {a: 1};
        Namespace.create('aaa.bbb.ccc', local).means(obj);

        assert(local.aaa.bbb.ccc, obj); // true
    }());
##License:
<pre>
(The MIT License)

Copyright (c) 2013 nazomikan
https://github.com/nazomikan/NamespaceJS

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</pre>

