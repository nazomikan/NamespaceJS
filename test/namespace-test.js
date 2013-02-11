var assert = require('assert')
  , Namespace = require('../namespace.js')
  ;

describe('Namespace', function () {
  describe('#new', function () {
    it('should create namespace under the global', function () {
      var namespace = new Namespace('aaa.bbb.ccc')
        , exist_aaa = global.hasOwnProperty('aaa')
        , exist_aaa_bbb = aaa.hasOwnProperty('bbb')
        , exist_aaa_bbb_ccc = aaa.bbb.hasOwnProperty('ccc')
        , lastSpace = aaa.bbb
        ;

      assert(exist_aaa);
      assert(exist_aaa_bbb);
      assert.equal(false, exist_aaa_bbb_ccc);
    });

    it('should not create namespace when spacestr is not chaining', function () {
      var namespace = new Namespace('aaa')
        , exist_aaa = global.hasOwnProperty('aaa')
        ;

      assert.equal(false, exist_aaa);
    });

    it('should reuse namespace when namespace already exists and it is object', function () {
      var exist_aaa_bbb
        ;

      global.aaa = {ccc: 'hoge'};
      new Namespace('aaa.bbb.ccc');
      exist_aaa_bbb = aaa.hasOwnProperty('bbb');

      assert.equal(true, exist_aaa_bbb);
      assert.equal('hoge', aaa.ccc);
    });

    it('should export object to context when given context', function () {
      var local = {}
        , namespace = new Namespace('aaa.bbb', local)
        , exist_global_aaa = global.hasOwnProperty('aaa')
        , exist_local_aaa = local.hasOwnProperty('aaa')
        ;

      assert.equal(false, exist_global_aaa);
      assert.equal(true, exist_local_aaa);
    });

    it('should raise err when namespace already exists and it is string(primitive)', function () {
      var message = 'namespace aaa already exist and aaa is primitive'
        ;

      global.aaa = 'aaa';
      assert.throws(function () {
        new Namespace('aaa.bbb');
      }, Error, message);
    });

    it('should raise err when namespace already exists and it is number(primitive)', function () {
      var message = 'namespace aaa already exist and aaa is primitive'
        ;

      global.aaa = 123;
      assert.throws(function () {
        new Namespace('aaa.bbb');
      }, Error, message);
    });

    it('should raise err when namespace already exists, it is boolean(primitive)', function () {
      var message = 'namespace aaa already exist and aaa is primitive'
        ;

      global.aaa = true;
      assert.throws(function () {
        new Namespace('aaa.bbb');
      }, Error, message);
    });
  });

  describe('#create', function () {
    it('should create namespace under the global', function () {
      var namespace = Namespace.create('aaa.bbb.ccc')
        , exist_aaa = global.hasOwnProperty('aaa')
        , exist_aaa_bbb = aaa.hasOwnProperty('bbb')
        , exist_aaa_bbb_ccc = aaa.bbb.hasOwnProperty('ccc')
        ;

      assert(exist_aaa);
      assert(exist_aaa_bbb);
      assert.equal(false, exist_aaa_bbb_ccc);
    });

    it('should not create namespace when spacestr is not chaining', function () {
      var namespace = Namespace.create('aaa')
        , exist_aaa = global.hasOwnProperty('aaa')
        ;

      assert.equal(false, exist_aaa);
    });

    it('should export object to context when given context', function () {
      var local = {}
        , namespace = Namespace.create('aaa.bbb', local)
        , exist_global_aaa = global.hasOwnProperty('aaa')
        , exist_local_aaa = local.hasOwnProperty('aaa')
        ;

      assert.equal(false, exist_global_aaa);
      assert.equal(true, exist_local_aaa);
    });

    it('should reuse namespace when namespace already exists and it is object', function () {
      var exist_aaa_bbb
        ;

      global.aaa = {ccc: 'hoge'};
      Namespace.create('aaa.bbb.ccc');
      exist_aaa_bbb = aaa.hasOwnProperty('bbb');

      assert.equal(true, exist_aaa_bbb);
      assert.equal('hoge', aaa.ccc);
    });

    it('should raise err when namespace already exists, it is string(primitive)', function () {
      var message = 'namespace aaa already exist and aaa is primitive'
        ;

      global.aaa = 'aaa';
      assert.throws(function () {
        Namespace.create('aaa.bbb');
      }, Error, message);
    });

    it('should raise err when namespace already exists, it is number(primitive)', function () {
      var message = 'namespace aaa already exist and aaa is primitive'
        ;

      global.aaa = 123;
      assert.throws(function () {
        Namespace.create('aaa.bbb');
      }, Error, message);
    });

    it('should raise err when namespace already exists, it is boolean(primitive)', function () {
      var message = 'namespace aaa already exist and aaa is primitive'
        ;

      global.aaa = true;
      assert.throws(function () {
        Namespace.create('aaa.bbb');
      }, Error, message);
    });
  });

  describe('#means', function () {
    it('should define under the namespace', function () {
      var obj = {}
        ;

      Namespace.create('aaa.bbb.ccc').means(obj);
      assert.equal(obj, aaa.bbb.ccc);
    });

    it('should define under the local namespace', function () {
      var local = {}
        , obj = {}
        ;

      Namespace.create('aaa.bbb.ccc', local).means(obj);
      assert.equal(obj, local.aaa.bbb.ccc);
    });
  });

  afterEach(function () {
    delete global.aaa;
  });
});
